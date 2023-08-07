import { useState } from 'react';

import { Title, Subtitle } from './paymentTitle.style';
import EventChoices from './EventChoices';
import MakePayment from './MakePayment.js';

const Payment = () => {
  const [fillCard, setFillCard] = useState(false);
  const [ticketType, setTicketType] = useState('');
  const [hotelType, setHotelType] = useState('');

  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <Subtitle>{fillCard ? 'Ingresso escolhido' : 'Primeiro, escolha sua modalidade de ingresso'}</Subtitle>
      {fillCard ? (
        <MakePayment ticketType={ticketType} hotelType={hotelType} />
      ) : (
        <EventChoices hotelType={hotelType} setHotelType={setHotelType} ticketType={ticketType} setTicketType={setTicketType} setFillCard={setFillCard} />
      )}
    </>
  );
};

export default Payment;
