import styled from "styled-components";

export const Valor = styled.div`
    @media(max-width: 700px){
        background-color: #F5F5F5;
        min-width: 400px;
        margin-left: 25px;
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        margin-right: 25px;
    .primeiraLinha{
        display:flex;
        justify-content: space-between;
        margin-left: 20px;
        margin-right: 20px;
        border-top: 5px solid #E0E0E0;
    }
    p{
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
    }
    p + p{
        color: gray;
    }
    button{
        width: 343px;
        height: 60px;
        border-radius: 8px;
        padding: 0px 20px 0px 20px;
        border: 2px solid #E0E0E0;
        font-weight: 600;
        font-size: 16px;
        margin-left: 50px;
        color: #828282;
        background-color: #E0E0E0;
    }
    button:hover{
        background-color: #828282;
        color: #E0E0E0;
    }
    }
    @media(min-width: 700px){
        background-color: #F5F5F5;
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        width: 385px;
        margin-left: 50px;
        .primeiraLinha{
        display:flex;
        justify-content: space-between;
        margin-left: 20px;
        margin-right: 20px;
        border-top: 5px solid #E0E0E0;
    }
    p{
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
    }
    p + p{
        color: gray;
    }
    button{
        width: 343px;
        height: 60px;
        border-radius: 8px;
        padding: 0px 20px 0px 20px;
        border: 2px solid #E0E0E0;
        font-weight: 600;
        font-size: 16px;
        color: #828282;
        background-color: #E0E0E0;
    }
    button:hover{
        background-color: #828282;
        color: #E0E0E0;
    }
    }
    
`