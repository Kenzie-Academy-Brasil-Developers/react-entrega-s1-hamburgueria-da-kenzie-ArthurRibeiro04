import styled from "styled-components";

export const Item = styled.li`
    min-width: 380px;
    display: flex;
    img{
        background-color: #E0E0E0;
        width: 80px;
        height: 80px;
    }
    h3{
        font-size: 18px;
        line-height: 5px;
        font-weight: 700
    }
    p{
        font-size: 12px;
        line-height: 20px;
        font-weight: 500;
        color: #BDBDBD;
    }
    span{
        font-size: 12px;
        color: #828282;
    }
    .nameERemove{
        display: flex;
        justify-content: space-between;
        width: 270px;
    }
    .container{
        margin-left: 10px;
    }
`