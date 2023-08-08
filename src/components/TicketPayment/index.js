import  { useState } from 'react';
import { StyledTypography } from './style';
import useEnrollment from '../../hooks/api/useEnrollment';
import TicketType from './TicketType';
import MakePayment from './MakePayment';

export default function TicketPayment() {
  const { enrollment } = useEnrollment();
  const [fillCard, setFillCard] = useState(false);

  return (
    <>
      {enrollment ?
        <>
          <StyledTypography variant="h4" margin="20px">Ingresso e pagamento</StyledTypography>
          <StyledTypography variant="h6" color="textSecondary" margin="10px">{fillCard ? 'Ingresso escolhido' : 'Primeiro, escolha sua modalidade de ingresso'}</StyledTypography>
          {fillCard ? (
            <MakePayment />
          ) : (
            <TicketType setFillCard={setFillCard} />
          )}
        </>
        :
        <StyledTypography variant="h4" margin="20px">Pagamento não disponível</StyledTypography>

      }
    </>

  );
}
