import { StyledTypography } from './style';
import useEnrollment from '../../hooks/api/useEnrollment';
import TicketType from './TicketType';

export default function TicketPayment() {
  const { enrollment } = useEnrollment();

  return (
    <>
      {enrollment ?
        <>
          <StyledTypography variant="h4" margin="20px">Ingresso e pagamento</StyledTypography>
          <StyledTypography variant="h6" color="textSecondary" margin="10px">Primeiro, escolha sua modalidade de ingresso</StyledTypography>
          <TicketType />
        </>
        :
        <StyledTypography variant="h4" margin="20px">Pagamento não disponível</StyledTypography>
      }
    </>

  );
}
