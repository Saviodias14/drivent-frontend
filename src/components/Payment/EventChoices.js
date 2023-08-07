import { Subtitle } from './paymentTitle.style';
import { SelectionBox, Box, ConfirmButton } from './paymentBox.style.js';
import { ticketsType, hotelsType } from './paymentData';

const EventChoices = ({ hotelType, setHotelType, ticketType, setTicketType, setFillCard }) => {
  return (
    <>
      <SelectionBox>
        {ticketsType.map((ticket) => (
          <Box selection={ticketType === ticket.id} key={ticket.id} onClick={() => setTicketType(ticket.id)}>
            <h2>{ticket.type}</h2>
            <p>R$ {ticket.price}</p>
          </Box>
        ))}
      </SelectionBox>
      
      {ticketType && (
        <>
          <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
          <SelectionBox>
            {hotelsType.map((type) => (
              <Box selection={hotelType === type.id} key={type.id} onClick={() => setHotelType(type.id)}>
                <h2>{type.type}</h2>
                <p>+ R$ {type.price}</p>
              </Box>
            ))}
          </SelectionBox>
        </>
      )}

      {hotelType && (
        <>
          <Subtitle>Fechado! O total ficou em <span>R$ ${Number(ticketsType[ticketType-1].price) + Number(hotelsType[hotelType-1].price)}</span>. Agora é só confirmar:</Subtitle>
          <ConfirmButton onClick={() => setFillCard(true)}>RESERVAR INGRESSO</ConfirmButton>
        </>
      )}
    </>
  );
};

export default EventChoices;
