import styled from 'styled-components';
export const ConfirmButton = styled.div`
  margin-top: 23px;
  width: 172px;
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
