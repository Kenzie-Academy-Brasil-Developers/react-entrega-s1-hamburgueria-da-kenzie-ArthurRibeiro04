import styled from "styled-components";

export const Headers = styled.div`
    

    @media (max-width: 700px){
        width: 100%;
        background-color: #F5F5F5;
        box-shadow: 1px 1px 5px 1px gray;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .titulo{
            margin-right: 100px
        }
        .pesquisa{
            margin-left: 100px;
            
        }
    }

        width: 100%;
        background-color: #F5F5F5;
        box-shadow: 1px 1px 5px 1px gray;
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    .titulo{
        display:flex;
        margin-left: 100px;
    }
    .titulo h2{
        color: #F39617;
        line-height: 53px;
        margin-left: 10px;
    }
    .pesquisa{
        width: 320px;
        height: 50px;
        background-color: white;   
        display:flex;
        margin-right: 100px;
        margin-bottom: 10px;
    }
    .pesquisa input{
        border:none;
        width:320px;
        height:50px;
        padding-left: 10px;
        font-size: 20px;
        color: gray;
        border: 2px solid #E0E0E0;
    }
    .pesquisa button{
        position:absolute;
        width: 107px;
        height: 40px;
        background-color: #27AE60;
        border:none;
        border-radius: 8px;
        color: white;
        margin-top: 7px;
        margin-left: 205px;
    }
    .pesquisa button:hover{
        position:absolute;
        width: 107px;
        height: 40px;
        background-color: #1F874B;
        border:none;
        border-radius: 8px;
        color: white;
        margin-top: 7px;
        margin-left: 205px;
    }
`