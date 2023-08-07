import styled from 'styled-components';

export const SelectionBox = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  div{
    margin: 0 !important;
  }
`;
export const Box = styled.div`
  width: ${props => (props.width ? props.width : '145px')};
  height: ${props => (props.heigth ? props.heigth : '145px')};
  margin-bottom: calc(44px - 36px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #CECECE;
  background-color: ${props => (props.selection ? '#FFEED2' : 'transparent')};
  cursor: pointer;

  text-align: center;
  font-family: Roboto;
  font-style: normal;
  line-height: normal; 
  font-weight: 400;
  h2{
    color: #454545;
    font-size: 16px;
  }
  p{
    color: #898989;
    font-size: 14px;
  }
`;

export const ConfirmButton = styled.div`
  margin-top: 17px;
  width: ${props => (props.width ? props.width : '162px')};
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);

  flex-shrink: 0;
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  &:hover {
    background: #FFEED2;
    cursor: pointer;
  }
`;
