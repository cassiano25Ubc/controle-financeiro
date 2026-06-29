import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background-color:#fff;
    border-radius: 5px;
    padding: 15px 0;
width: 100%;
    
    @media (max-width: 750px){
        width:20%;
    p {
        font-size:12px;
        width:100%;
        text-align:center;
        margin: 0;
    }
    span{
        font-size: 20px;
         width:100%;
         text-align:center;
        margin: 0;

    }
    svg{
        display:nome;
          text-align:center;
        margin: 0;

    }  
 `;
 export const Header = styled.header`
    display: flex;
    align-Items:center;
    justify-content: space-aroud;
    width: 100%;
    gap: 10 px;

    svg{
    width: 25px;
    height:25px;
    }
  `;
  export const HeaderTitle = styled.p`{
    font-size: 20px;
    text-align:center;
    margin: 0;
    `;
    export const Total = styled.span`
    font-size: 30px;
    font-weight:bold;
    text-align:center;
    `;