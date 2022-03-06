import styled from "styled-components"

export const Wrapper = styled.main`
  text-align: center;
`;

export const Content = styled.section`
  h1 {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 44px;
    font-weight: bold;
    line-height: 65px;
    letter-spacing: 7px;
    color:#F39200;
    @media only screen and (max-width:768px) {
      font-size: 30px;
      line-height: 41px;

    }
  }
`;
export const InfoBlock =  styled.div`
  text-align: left;
  p{
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 15px;
    letter-spacing:7px;
    line-height:20px;
    padding:5px 0;
  }
`;