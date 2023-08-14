import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useToken from '../../../hooks/useToken';
import useTicketId from '../../../hooks/api/useTicketId';
import axios from 'axios';
import { getHotels } from '../../../services/hotelApi';
import { Person, PersonOutline } from 'react-ionicons';

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState({});
  // const [SelectedRoom, setSelectedRoom] = useState({});
  const token = useToken();
  const { ticketId } = useTicketId();
  const auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(async() => {
    const hotelList = await getHotels(token);
    setHotels(hotelList);
  }, []);

  useEffect(() => {
    if (selectedHotel.id) {
      axios
        .get(
          `${process.env.REACT_APP_API_BASE_URL}/hotels/${selectedHotel.id}`,
          auth
        )
        .then((res) => {
          setRooms(res.data.Rooms);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [selectedHotel]);

  if (!ticketId || ticketId.status !== 'PAID') {
    return (
      <HotelContainer>
        <HotelTitle>Escolha de hotel e quarto</HotelTitle>
        <DeniedBox>
          <DeniedAccess>
            Você precisa ter confirmado pagamento antes de fazer a escolha de
            hospedagem
          </DeniedAccess>
        </DeniedBox>
      </HotelContainer>
    );
  }

  if (ticketId.TicketType.isRemote || !ticketId.TicketType.includesHotel) {
    return (
      <HotelContainer>
        <HotelTitle>Escolha de hotel e quarto</HotelTitle>
        <DeniedBox>
          <DeniedAccess>
            Sua modalidade de ingresso não inclui hospedagem. Prossiga para a
            escolha de atividades.
          </DeniedAccess>
        </DeniedBox>
      </HotelContainer>
    );
  }
  return (
    <HotelContainer>
      <HotelTitle>Escolha de hotel e quarto</HotelTitle>
      <HotelSubtitle>Primeiro, escolha seu hotel</HotelSubtitle>
      <HotelList>
        {hotels.map((hotel, i) => (
          <HotelOption
            key={i}
            onClick={() => {
              setSelectedHotel(hotel);
              console.log(selectedHotel);
              console.log(rooms);
            }}
            style={{ backgroundColor: selectedHotel === true ? '#FFEED2' : '' }}
          >
            <img src={hotel.image} alt={hotel.name} />
            <HotelDescription>
              <p>{hotel.name}</p>
              <p>Tipos de acomodação:</p>
              <p>Single e Double</p>
              <p>Vagas disponíveis:</p>
              <p>103</p>
            </HotelDescription>
          </HotelOption>
        ))}
      </HotelList>
      {rooms.length !== 0 ? (
        <HotelSubtitle>Ótima pedida! Agora escolha seu quarto:</HotelSubtitle>
      ) : (
        ''
      )}
      <ReserveList>
        {rooms.map((r, i) => (
          <Room key={i}>
            <p>{r.name}</p>
            <div>
              {[...Array(r.capacity)].map((p, i) => (
                <PersonOutline key={i} />
              ))}
            </div>
          </Room>
        ))}
      </ReserveList>
    </HotelContainer>
  );
}

const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
`;
const HotelTitle = styled.h1`
  color: #000;
  font-family: Roboto;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 36px;
`;

const HotelSubtitle = styled.h1`
  color: #8e8e8e;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 18px;
`;

const HotelList = styled.ul`
  display: flex;
  margin-bottom: 30px;
`;

const HotelOption = styled.li`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  background: #ebebeb;
  margin-right: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;

  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

const HotelDescription = styled.div`
p:nth-child(1){
  color: #343434;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom:10px;
}
p:nth-child(2){
  color: #3C3C3C;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom:2px;
}
p:nth-child(3){
  Single e Double
  color: #3C3C3C;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom:14px;
}
p:nth-child(4){
  color: #3C3C3C;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom:2px;
}
p:nth-child(5){
  color: #3C3C3C;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}`;

const DeniedBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 77%;
`;
const DeniedAccess = styled.p`
  width: 411px;
  height: 46px;
  color: #8e8e8e;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ReserveList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-bottom: 100px;
`;
const Room = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 30px;
  background-color: 'white';
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #cecece;

  p {
    color: #454545;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
