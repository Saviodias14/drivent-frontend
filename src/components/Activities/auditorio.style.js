import styled from 'styled-components';

export const AuditorioContainer = styled.div`
    display: ${props => (props.display ? 'none' : 'grid')};
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "Principal Lateral Workshop";
`;
export const Container = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
export const Title = styled.h4`
    margin-bottom: 13px;
    color: #7B7B7B;
    text-align: center;
    font-family: Roboto;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const ContainerBox = styled.ul`
    width: 100%;
    height: 390px;
    padding: 9px;
    border: 1px solid #D7D7D7;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    overflow: scroll;
`;
export const Box = styled.li`
    height: ${props => (props.height ? props.height : '79px')};
    /* recebe variacao de size */
    max-width: 265px;
    width: 100%;
    padding: 9px;
    
    border-radius: 5px;
    background-color: ${props => (props.selected ? '#D0FFDB' : '#F1F1F1')};
    flex-shrink: 0;
    cursor: ${props => (props.enabled ? 'not-allowed' : 'pointer')};
`;
export const BoxContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
`;
export const Info = styled.div`
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    line-height: normal;
    color: #343434;
    padding-right: 13px;
    h5{
        font-weight: 700;
    }
    p{
        margin-top: 6px;
        font-weight: 400;
    }
`;
export const Data = styled.div`
    height: 100%;
    width: calc(66px - 9px);
    padding-left: 6px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    font-size: 9px;
    border-left: 1px solid #0003;
    color: ${props => (props.soldOut ? '#CC6666' : '#078632')};
    svg{
        font-size: 20px;
    }
`;
