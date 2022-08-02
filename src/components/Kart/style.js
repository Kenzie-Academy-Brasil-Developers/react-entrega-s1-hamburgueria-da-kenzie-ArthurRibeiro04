import styled from "styled-components";

export const Carrinho = styled.div`
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
    @media(max-width: 700px){
      min-width: 365px;
      min-height: 158px;
      max-height:465px;
      padding: 20px 10px 20px 10px;
      gap: 21px;
      border-left: 1px solid lightgray;
      border-right: 1px solid lightgray;
      border-top: 65px solid #27AE60;
      margin-top: 150px;
      margin-left: 25px;
      overflow-y: auto;
      margin-top: 700px;
      background-color: #F5F5F5;
      margin-right: 25px;
      h2{
      position: absolute;
      bottom: 2px;
      color: white;
      font-size: 18px;
    }
    }
    @media(min-width: 700px){
      width: 365px;
      min-height: 158px;
      max-height:465px;
      padding: 20px 10px 20px 10px;
      overflow-x: hidden;
      gap: 21px;
      border: 1px solid lightgray;
      border-top: 65px solid #27AE60;
      margin-top: 180px;
      margin-left: 50px;
      overflow-y: auto;
      background-color: #F5F5F5;
      h2{
      position: absolute;
      margin-bottom: 275px;
      color: white;
      font-size: 18px;
    }
    }
    p:hover{
      text-decoration: underline;
      cursor: pointer;
    }
    
    h1{
      height: 40px;
      font-size: 18px;
      font-weight: 700px;
    }
    span{
      
      height: 24px;
      font-size: 14px;
      font-weight: 400;
      margin: 0 auto
    }
`

