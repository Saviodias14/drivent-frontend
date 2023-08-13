import { useState } from 'react';
import * as cardValidator from 'card-validator';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { SelectionBox, Box, ConfirmButton } from './paymentBox.style.js';
import { Subtitle } from './paymentTitle.style.js';
import { CardForm } from './paymentCard.style.js';
import useTicketId from '../../hooks/api/useTicketId.js';

const MakePayment = () => {
  const { ticketId } = useTicketId();
  const { savePayment } = useSavePayment();
  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
    cardSecurityCode: '',
    focus: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    const valueCheck = validateCard(false, name, value);
    if (valueCheck) {
      event.target.style.border = '1px solid #9acd32';
    } else {
      event.target.style.border = '1px solid #dc143c';
    }
  };

  const validateCard = (all, type, value) => {
    if (all) {
      const name = values.cardName.length > 4;
      const number = cardValidator.number(values.cardNumber);
      const expiration = cardValidator.expirationDate(values.cardExpiration);
      const cvc = cardValidator.cvv(values.cardSecurityCode);
  
      return name && number.isValid && expiration.isValid && cvc.isValid;
    } else {
      switch (type) {
      case 'cardName':
        return value.length > 4;
      case 'cardNumber':
        return cardValidator.number(value).isValid;
      case 'cardExpiration':
        return cardValidator.expirationDate(value).isValid;
      case 'cardSecurityCode':
        return cardValidator.cvv(value).isValid;
      default:
        return true;
      }
    }
  };
    
  const handlePayment = () => {
    const isValidCard = validateCard(true);
    if (isValidCard) {
      const paymentData = {
        ticketId,
        cardIssuer: cardName,
        cardLastDigits: cardNumber
      };
      savePayment(paymentData);
      toast('Pagamento realizado com sucesso.');
    } else {
      // Lógica para tratar o cartão inválido
      toast('Erro');
    }
  };

  return (
    <>
      <Box selection={true} width={'290px'} heigth={'108px'}>
        <h2>{'tal + online'}</h2>
        <p>{'R$ valor + valor'}</p>
      </Box>
      <Subtitle>Pagamento</Subtitle>  
      <SelectionBox>
        <Cards
          cvc={values.cardSecurityCode}
          expiry={values.cardExpiration}
          focused={values.focus}
          name={values.cardName}
          number={values.cardNumber}
        />
        <CardForm>
          <input
            type="number"
            name="cardNumber"
            placeholder="Card Number"
            value={values.cardNumber}
            onChange={handleChange}
            onFocus={() => setValues({ ...values, focus: 'number' })}
          />
          <label htmlFor="cardNumber">E.g.: 49..., 51..., 36..., 37...</label>
          <input
            type="text"
            name="cardName"
            placeholder="Name"
            value={values.cardName}
            onChange={handleChange}
            onFocus={() => setValues({ ...values, focus: 'name' })}
          />
          <div>
            <input
              type="number"
              name="cardExpiration"
              placeholder="Valid Thru"
              value={values.cardExpiration}
              onChange={handleChange}
              onFocus={() => setValues({ ...values, focus: 'expiry' })}
            />
            <input
              type="number"
              name="cardSecurityCode"
              placeholder="CVC"
              value={values.cardSecurityCode}
              onChange={handleChange}
              onFocus={() => setValues({ ...values, focus: 'cvc' })}
            />
          </div>
        </CardForm>
      </SelectionBox>
      <ConfirmButton onClick={handlePayment} width={'182px'}>FINALIZAR PAGAMENTO</ConfirmButton>
    </>
  );
};

export default MakePayment;
