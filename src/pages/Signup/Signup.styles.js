import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;
export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 460px;
  padding: 0px 20px;
  @media (max-width: 475px) {
    max-width: 100%;
  }
`;
export const Image = styled.div`
  img {
    cursor: pointer;
    display: block;
    width: 273px;
    height: 164px;
    margin: 0 auto;
    @media (max-width: 475px) {
      width: 183px;
      height: 114px;
    }
  }
`;
export const FormWrapper = styled.div`
  padding-top: 60px;

  form label {
    display: block;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 10px;
  }
  form input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding: 3px 0px 3px 10px;
    border: none;
  }
  form button {
    cursor: pointer;
    display: block;
    width: 100%;
    background-color: #f39200;
    border: none;
    font-size: 31px;
    line-height: 40px;
    text-transform: capitalize;
    border-radius: 10px;
    font-weight: bold;
    padding: 10px 0;
    margin-top: 60px;
  }
  .input-item {
    margin-bottom: 20px;
  }
`;

export const Error = styled.p`
  color: red;
  margin: 0;
  padding:5px 0;

`;

export const  InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .input-item {
    width: 47%;
  }
  @media (max-width:475px) {
    flex-direction: column;
    .input-item {
      width: 100%;
    }
  }
`;
export const Complete = styled.p`
  color: green;
  margin: 0;
  padding:5px 0;
`;
export const Back = styled.button`
  cursor: pointer;
  background-color: transparent;
  font-size: 22px;
  line-height: 29px;
  color: #fff;
  border: none;
  padding-top: 20px;
`;