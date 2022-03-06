import styled from "styled-components";

export const Wrapper = styled.main``;

export const Content = styled.div`
  text-align: center;
  padding: 100px 10px 30px 10px;
  h1 {
    padding: 0;
    margin: 20px 0;
    font-size: 44px;
    font-weight: bold;
    line-height: 65px;
    letter-spacing: 7px;
    color:#F7A118;
    @media only screen and (max-width:768px) {
      font-size: 30px;
      line-height: 41px;

    }
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    line-height: 33px;
    color:#fff;
    @media only screen and (max-width:768px) {
      font-size: 20px;
      line-height: 27px;
    }
  }
`;

export const Info = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1100px;
    @media only screen and (max-width:768px) {
      max-width: 100%;
    }
`;

export const InfoTitle = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  font-size: 31px;
  font-weight: bold;
  line-height:40px;
  border-radius:10px;
  color:#030303;
  background-color: #F7A118;
  max-width: 780px;
  padding: 5px 15px;
  transform: translateY(15px);
  @media only screen and (max-width:768px) {
    font-size: 18px;
    line-height:25px;
    max-width: 450px;
  }
  @media only screen and (max-width:475px) {
    font-size: 18px;
    line-height:25px;
    max-width: 340px;
  }
  @media only screen and (max-width:385px) {
    font-size: 17px;
    line-height:20px;
    max-width: 240px;
  }
`;

export const InfoBlock = styled.div`
  border: 4px solid #F7A118;
  border-radius: 25px;
  div {
    padding:0 50px;
  }
  p,h5 {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 7px;
    line-height: 30px;
    @media only screen and (max-width:768px) {
      font-size: 18px;
      line-height:25px;
      letter-spacing: 5px;
    }
  }
  h5 {
    color:#F7A118;
  }
  .btn-enter {
    display: block;
    width: 100%;
    font-size: 28px;
    line-height: 39px;
    padding: 10px 30px;
    background-color: #F7A118;
    color:#030303;
    border:none;
    border-radius: 10px;
    margin:0 auto;
    font-weight: bold;
    max-width: 350px;
    a {
      color:inherit
    }
    @media only screen and (max-width:768px) {
      font-size: 21px;
      line-height:21px;
      padding: 8px 20px;
      max-width: 300px;
    }
  }
  .btn-view {
    display: block;
    width: 100%;
    font-size: 28px;
    line-height: 39px;
    padding: 6px 30px;
    background-color: #C1C1C1;
    color:#030303;
    border:none;
    border-radius: 10px;
    margin:10px auto;
    
    font-weight: bold;
    max-width: 500px;
    text-transform: capitalize;
    a {
      color:inherit
    }
    @media only screen and (max-width:768px) {
      font-size: 21px;
      line-height:21px;
      padding: 8px 20px;
      max-width: 400px;
    }
  }
`;
