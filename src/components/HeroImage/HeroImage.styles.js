import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background: linear-gradient(
      to bottom, rgba(0, 0, 0, 0)
      41% , rgba(0, 0, 0, 0.65)
      100% 
   ), url(${({ image }) => image});
   background-size: 100%, cover;
   background-position: center;
   background-repeat: no-repeat;
   min-height: 100vh;
`;

export const Content = styled.div`
`;
export const Text = styled.div`
   width: 100%;
   max-width: 600px;
   h1 {
      font-size: 70px;
      line-height: 80px;
      font-weight: 900;

   @media (max-width: 1200px) {
      font-size: 50px;
      line-height: 54px;
   }
   @media (max-width: 1024px) {
      font-size: 40px;
      line-height: 50px;
   }
   @media (max-width: 320px){
    font-size: 28px;
    line-height: 36px;
   }
   }
   @media (max-width: 1024px) {
      max-width: 100%;
      text-align: center;
   }
`;

export const ContentItem = styled.div` 
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap:wrap;
   padding-top: 150px;
   @media (max-width: 1024px) {
      justify-content: center;
   }
`;
export const Video = styled.div`
   width: 100%;
   max-width: 600px;
   video {
      width: 100%;
   }
`;
export const Register = styled.div`
   p {
      font-size: 47px;
      line-height: 61px;
      font-weight: bold;
   }
   a {
      font-size: 32px;
      text-transform: uppercase;
      border-radius: 8px;
      border: 2px solid #F7A118;
      color: #fff;
      font-weight: bold;
      padding: 12px 40px;
   }
   @media (max-width: 1024px) {
      text-align: center;
      p {
         font-size: 26px;
      }
      a {
      font-size: 19px;
      text-transform: uppercase;
      border-radius: 8px;
      padding: 12px 30px;
   }
   }
`;
