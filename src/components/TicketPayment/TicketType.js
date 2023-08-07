import useTicket from '../../hooks/api/useTicket';
import TicketChoice from './TicketChoice';
import HotelChoice from './HotelChoice';
import TicketReservation from './TicketsReservation';
import { useEffect, useState } from 'react';

export default function TicketType() {
  const { ticketTypes, ticketTypesLoading } = useTicket();
  const [chosenTicket, setChosenTicket] = useState(null);
  const [choiceOfHosting, setChoiceOfHosting] = useState(null);
  const [totalValue, setTotalValue] = useState(0);
  const [tickets, setTickets] = useState();
  const [prices, setPrices] = useState();

  useEffect(() => {
    setTickets(
      [ticketTypes?.find(t => t.isRemote), ticketTypes?.find(t => t.isRemote === false)]
    );
    setPrices(
      {
        online: ticketTypes?.find(t => t.isRemote).price,
        inPerson: ticketTypes?.find(t => t.isRemote === false).price,
        hotel: 350,
        noHotel: 0,
      }
    );
  }, [ticketTypes]);

  function isActive(chosenParam, buttonParam) {
    return chosenParam === buttonParam;
  }

  if (ticketTypesLoading) {
    return (
      <>Carregando</>
    );
  }
  const arrayValues = {
    ticketTypes, 
    chosenTicket,
    setChosenTicket,
    isActive,
    totalValue,
    setTotalValue,
    choiceOfHosting,
    setChoiceOfHosting,
    prices, 
    setPrices
  };

  return (
    <>
      {tickets.map((t) => <TicketChoice ticket={t} arrayValues={arrayValues} />)}
      <HotelChoice arrayValues={arrayValues}/>
      <TicketReservation arrayValues={arrayValues} />
    </>
  );
}
