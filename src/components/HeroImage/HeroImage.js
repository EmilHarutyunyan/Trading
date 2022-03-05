import React from 'react';
import {Link} from "react-router-dom"
// Styles
import { Wrapper, Content, Text,Video,ContentItem,Register} from './HeroImage.styles';

function HeroImage({ image, title, videoSrc,eventBlock }) {
   return (
      <Wrapper image={image}>
         <Content className='main-container'>
            <ContentItem>
               <Text>
               <h1>{title}</h1>
               </Text>
               <Video>
                  <video controls>
                  <source src={videoSrc} type="video/mp4"/>
               </video>
               </Video>
            </ContentItem>
            
            <Register>
               <p>{eventBlock.title}</p>
               <Link to={eventBlock.url}>{eventBlock.text}</Link>
            </Register>
         </Content>
         
      </Wrapper>
   )
    
}
export default HeroImage;