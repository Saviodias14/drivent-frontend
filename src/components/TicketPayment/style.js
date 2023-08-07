import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const StyledTypography = styled(Typography)`
  margin-top: ${({ marginTop }) => marginTop ? `${marginTop}!important` : '0px'};
  margin-bottom: ${({ margin }) => `${margin}!important`};
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
  width: 145px;
  height: 145px;
  margin-right: 3%;
  /* padding: 5%; */

  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 12%;
  background-color: transparent;
  ${props => props.active ? 'background-color: #FFEED2;' : ''}


  cursor: pointer;
  &:hover{
    background-color: #FFEED2;
  }
`;

export const PriceStyled = styled.h2`
  color: #898989;
`;

export const StyledTypeTicket = styled.h1`
  color: #454545;
  font-size: 16px;
`;

export const ButtonConfirm = styled.button`
  width: 200px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;

  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #E0E0E0;

  cursor: pointer;
  &:hover{
    background-color: #FFEED2;
  }
`;

export const ValueTotal = styled.span`
  color: #686868;
  font-weight: 700;
`;
