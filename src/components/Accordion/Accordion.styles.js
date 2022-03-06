import styled from "styled-components"

export const Wrapper =  styled.div`
  width: 100%;
  max-width: 890px;
  padding:20px;
  margin: 0 auto;
  @media only screen and (max-width:768px) {
    padding:15px 0px;
    max-width: 100%;
  }
`;
export const Accord =  styled.div`
  background-color: #030303;
  border:2px solid #F7A118;
  border-radius: 10px;
  padding: 8px 15px;
`;
export const QuestionBtn =  styled.button`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  font-size:25px;
  line-height: 33px;
  width: 100%;
  background-color: #030303;
  border: none;
  color:#fff;
  padding: 7px 0px;
  font-weight: bold;
  border-radius: 10px;
  transition:all 0.3s ease;
  @media only screen and (max-width:768px) {
    font-size: 18px;
    line-height: 20px;
    svg {
      font-size: 22px;
    }
  }
  
  svg {
    transition:transform 0.3s ease;
    font-size: 40px;
  }
  :hover {

    color: #F7A118;

  }
  &.active {
    
    svg {
      transition:transform 0.3s ease;
      transform: rotate(180deg);
    }
  }
`;
export const Panel =  styled.div`
  transition:all 0.3s linear;
  overflow: hidden;
  text-align: left;
  p {
    margin: 0;
    padding: 10px 0;
  }
`;