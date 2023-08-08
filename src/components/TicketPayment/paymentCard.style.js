import styled from 'styled-components';

export const CardForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.41px;
    color:  #898989;
    margin-bottom: 24px;
    input{
        width: 290px;
        border-radius: 3px;
        border: 1px solid #CECECE;
        padding: 13px;
        padding-left: 14px;
    }
    div{
        display: flex;
        gap: 12px;
    }
    div input:first-child{
        width: 42.3%;
    }
    div input:last-child{
        width: 22%;
    }
`;
