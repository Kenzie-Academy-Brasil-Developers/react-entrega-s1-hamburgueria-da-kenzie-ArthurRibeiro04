import styled from "styled-components";

export const Lista = styled.div`
    @media (max-width: 700px){
    display:flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    width: 450px;
    height: 500px;
    margin-top: 140px;
    margin-left: 20px;
    margin-right: 20px;
    position: absolute;
    }
    display:flex;
    flex-wrap: wrap;
    width: 950px;
    height: 100px;
    margin-top: 150px;
    margin-left: 100px
`
