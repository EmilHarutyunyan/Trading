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
    display: block;
    width: 100%;
    cursor: pointer;
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
export const ForgotPass = styled.div`
  text-align: right;
  padding-top: 5px;
  a {
    font-size: 18px;
    color: #fff;
    text-decoration: none;
  }
`;
export const SignUpItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  p {
    font-size: 20px;
    line-height: 29px;
  }
  a {
    background-color: #ffed00;
    color: #030303;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 21px;
    padding: 8px 40px;
  }
  @media (max-width: 475px) {
    flex-direction: column;
  }
`;

export const Error = styled.p`
  color: red;
  margin: 0;
  padding: 0;
`;
