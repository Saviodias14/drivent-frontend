import styled from 'styled-components';

export const Title = styled.h1`
  color: #000;
  font-family: Roboto;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: normal; 
`;
export const Subtitle = styled.p`
  display: ${props => (props.selection ? 'initial' : 'none')};
  margin-top: 36px;
  color: #8E8E8E;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
`;
export const Days = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
`;
export const DayButton = styled.div`
  margin-top: 23px;
  width: 131px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background: ${props => (props.isSelected ? '#FFD37D' : '#E0E0E0')};
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);

  flex-shrink: 0;
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  &:hover {
    background: #BDBDBD;
    cursor: pointer;
  }
`;
