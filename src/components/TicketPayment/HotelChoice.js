import { StyledTypography, StyledTypeTicket, PriceStyled, Button } from './style';

export default function HotelChoice({ arrayValues }) {
  return(
    <>
      {arrayValues.chosenTicket === 'inPerson' &&
      <>
        <StyledTypography variant="h6" color="textSecondary" margin="10px" marginTop="10px">Ótimo! Agora escolha sua modalidade de hospedagem</StyledTypography>
        <Button
          active={arrayValues.isActive(arrayValues.choiceOfHosting, 'withoutTheHotel')}
          disabled={arrayValues.isActive(arrayValues.choiceOfHosting, 'withoutTheHotel')}
          onClick={() => {
            arrayValues.setChoiceOfHosting('withoutTheHotel');
            arrayValues.setTotalValue(arrayValues.prices.inPerson);
          }}>
          <StyledTypeTicket>Sem Hotel</StyledTypeTicket>
          <PriceStyled>+ R$ 0</PriceStyled>
        </Button>
        <Button
          active={arrayValues.isActive(arrayValues.choiceOfHosting, 'withHotel')}
          disabled={arrayValues.isActive(arrayValues.choiceOfHosting, 'withHotel')}
          onClick={() => {
            arrayValues.setChoiceOfHosting('withHotel');
            arrayValues.setTotalValue(arrayValues.totalValue + arrayValues.prices.hotel);
          }}>
          <StyledTypeTicket>Com Hotel</StyledTypeTicket>
          <PriceStyled>+ R$ {arrayValues.prices.hotel}</PriceStyled>
        </Button>
      </>
      }
    </>     
  );
}
