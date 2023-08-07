import { Button, StyledTypeTicket, PriceStyled } from './style';

export default function TicketChoice({ ticket, arrayValues }) {
  const type = ticket.isRemote ? 'online' : 'inPerson';
  return (
    <Button
      active={arrayValues.isActive(arrayValues.chosenTicket, type)}
      disabled={arrayValues.isActive(arrayValues.chosenTicket, type)}
      onClick={() => {
        arrayValues.setChosenTicket(type);
        arrayValues.setTotalValue(ticket.price);
        arrayValues.setChoiceOfHosting(null);
      }}>
      <StyledTypeTicket>{type === 'online' ? 'Online' : 'Presencial'}</StyledTypeTicket>
      <PriceStyled>R$ {ticket.price}</PriceStyled>
    </Button>
  );
}
