import styled from "styled-components";

export const Card = styled.div`
    @media (max-width: 700px){
        width: 300px;
        margin-top: 30px;
        height: 445px;
       
        img{
            width:300px;
            height: 245px;
            background-color: #F5F5F5;
            margin-bottom: 200px
            
        }
        h1{
            width: 260px;
            height:12px;
            font-size: 18px;
            font-weight: 700;
            line-height: 24px;
            position: absolute;
            margin-top: 100px
        }
        p{
            width: 260px;
            height: 16px;
            font-size: 12px;
            font-weight: 400;
            line-height: 10px;
            color:  #828282;
            position: absolute;
            margin-top: 180px
        }
        span{
            width: 260px;
            height: 24px;
            font-size: 14px;
            font-weight: 600;
            line-height: 10px;
            color:#27AE60;
            position: absolute;
            margin-top: 250px
            
        }
        button{
            width: 106px;
            height: 40px;
            border-radius: 8px;
            padding: 0px 20px 0px 20px;
            gap: 10px;
            background-color: #27AE60;
            border: 2px solid #27AE60;
            color: white;
            margin-right: 155px;
            position: absolute;
            margin-top: 340px
        }
        button:hover{
            background-color: #1F874B;
        }
        
    }
    @media (min-width: 700px){
        width: 300px;
        margin-top: 30px;
        height: 445px;
       
        img{
            width:300px;
            height: 245px;
            background-color: #F5F5F5;
            margin-bottom: 200px
            
        }
        h1{
            width: 260px;
            height:12px;
            font-size: 18px;
            font-weight: 700;
            line-height: 24px;
            position: absolute;
            margin-top: 100px
        }
        p{
            width: 260px;
            height: 16px;
            font-size: 12px;
            font-weight: 400;
            line-height: 10px;
            color:  #828282;
            position: absolute;
            margin-top: 180px
        }
        span{
            width: 260px;
            height: 24px;
            font-size: 14px;
            font-weight: 600;
            line-height: 10px;
            color:#27AE60;
            position: absolute;
            margin-top: 250px
            
        }
        button{
            width: 106px;
            height: 40px;
            border-radius: 8px;
            padding: 0px 20px 0px 20px;
            gap: 10px;
            background-color: #27AE60;
            border: 2px solid #27AE60;
            color: white;
            position: absolute;
            margin-top: 340px
        }
        button:hover{
            background-color: #1F874B;
        }
    }
    width: 300px;
    height: 346px;
    border: 2px solid #E0E0E0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-right: 10px;
`
