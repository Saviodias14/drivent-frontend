import { useEffect, useState } from 'react';
import { StyledTypography, ButtonConfirm, ValueTotal } from './style';

export default function TicketReservation({ arrayValues }) {
  return (
    <>
      {arrayValues.chosenTicket === 'online' ?
        <ConfirmTicket arrayValues={arrayValues}/>
        :
        arrayValues.choiceOfHosting &&
        <ConfirmTicket arrayValues={arrayValues}/>
      }
    </>
  );
}

function ConfirmTicket({ arrayValues }) {
  const [idTicket, setIdTicket] = useState();
  // teste
  console.log('teste');

  useEffect(() => {
    if(arrayValues.chosenTicket==='online') {
      setIdTicket(arrayValues.ticketTypes.filter((t) => t.isRemote===true)[0].id);
    } else if(arrayValues.choiceOfHosting==='withHotel') {
      setIdTicket(arrayValues.ticketTypes.filter((t) => t.includesHotel===true)[0].id);
    } else {
      setIdTicket(arrayValues.ticketTypes.filter((t) => t.includesHotel===false)[0].id);
    }
    // eslint-disable-next-line 
  }, [arrayValues.chosenTicket, arrayValues.choiceOfHosting]);

  return (
    <>
      <StyledTypography variant="h6" color="textSecondary" margin="10px" marginTop="10px">
        Fechado! O total ficou em <ValueTotal>R$ {arrayValues.totalValue}</ValueTotal>. Agora é só confirmar:
      </StyledTypography>
      <ButtonConfirm
        onClick={() => {
        }}>
        RESERVAR INGRESSO
      </ButtonConfirm>
    </>
  );
}
