import React from 'react';

// Img / Video
import heroImg from '../../assets/img/heroImg.webp';
import videoSrc from '../../assets/video/video.mp4';
import HeroImage from '../../components/HeroImage/HeroImage';
// Components
import Header from '../../components/Header/Header';
function Home() {
  return (
    <>
      <Header />
      <HeroImage
        image={heroImg}
        title={'#1 Global trading competitions*'}
        videoSrc={videoSrc}
        text={'Have you got what it takes?'}
        eventBlock={{
          title: 'Have you got what it takes?',
          text: 'REGISTER NOW',
          url: '/signup',
        }}
      />
    </>
  );
}

export default Home;
