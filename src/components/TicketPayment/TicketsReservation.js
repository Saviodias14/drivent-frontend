import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { StyledTypography, ButtonConfirm, ValueTotal } from './style';
import useSaveTicket from '../../hooks/api/useSaveTicket';
import axios from 'axios';

export default function TicketReservation({ arrayValues, setFillCard }) {
  return (
    <>
      {arrayValues.chosenTicket === 'online' ?
        <ConfirmTicket arrayValues={arrayValues} setFillCard={setFillCard}/>
        :
        arrayValues.choiceOfHosting &&
        <ConfirmTicket arrayValues={arrayValues} setFillCard={setFillCard}/>
      }
    </>
  );
}

function ConfirmTicket({ arrayValues, setFillCard }) {
  const [ticketTypeId, setTicketTypeId] = useState();
  const { saveTicketLoading, saveTicket } = useSaveTicket();
  
  useEffect(() => {
    if(arrayValues.chosenTicket==='online') {
      setTicketTypeId(arrayValues.ticketTypes.filter((t) => t.isRemote===true)[0].id);
    } else if(arrayValues.choiceOfHosting==='withHotel') {
      setTicketTypeId(arrayValues.ticketTypes.filter((t) => t.includesHotel===true)[0].id);
    } else {
      setTicketTypeId(arrayValues.ticketTypes.filter((t) => t.includesHotel===false)[0].id);
    }
    // eslint-disable-next-line 
  }, [arrayValues.chosenTicket, arrayValues.choiceOfHosting]);

  return (
    <>
      <StyledTypography variant="h6" color="textSecondary" margin="10px" marginTop="10px">
        Fechado! O total ficou em <ValueTotal>R$ {arrayValues.totalValue}</ValueTotal>. Agora é só confirmar:
      </StyledTypography>
      <ButtonConfirm onClick={async() => {
        try{
          await saveTicket({ ticketTypeId });
          toast('O Ticket foi reservado com sucesso!');
          setFillCard(true);
        }catch(error) {
          toast('Ocorreu um erro');
        }
      }} disabled={saveTicketLoading}>
        RESERVAR INGRESSO
      </ButtonConfirm>
    </>
  );
}
