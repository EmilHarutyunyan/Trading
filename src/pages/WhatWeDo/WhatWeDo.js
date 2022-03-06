import React from "react";
// Components
import Header from "../../components/Header/Header";
// Styles
import {Wrapper, Content,InfoBlock} from "./WhatWeDo.styles"
function WhatWeDo() {
  
  return (
    <>
      <Header />
      <Wrapper className="main-container">
        <Content>
          <h1>What We Do </h1>
          <InfoBlock>
            <p>Trading world series allows traders to show off their trading ability, whilst competing for weekly, monthly and annual prizes! - No brainer right?</p>
            <p>There is ZERO entry fee, just simply create and fund a live account with a minimum $1000 USD with one of our partnered brokers.</p>
            <p>The tierd prize pool means that the more traders who enter... the bigger the prizes are - so get sharing!</p>
            <p>For every 100 traders who enter the competition, we increase the prize pool by $10,000!</p>
            <p>1st place will recieve 70% of the total pot, 2nd place secures 20% and 3rd place secures 10%. meaning if 1000 trades enter - you could win up to $70,000 in cash!</p>
            <p>But dont worry if you dont win! 
                youll automatically be entered into the next months competition. 
                Not only that, we will be giving away FREE $200k funded acccount challenges every week on a random draw system.
            </p>
            <p>The competition is based on how much % you make.. it's also broke down into 3 individual competitions: </p>
            <p>- Monthly comp (each 1st of the month your account stats will go back to a 0% gain. This makes the competition fair no matter when you join!</p>
            <p>- Quaterly comp (each Quater of the year, we look at who is in the top 3 and award them accordingly.</p>
            <p>- Yearly comp (each year that passes, we will also award the top 3 traders.</p>
          </InfoBlock>
        </Content>
      </Wrapper>
    </>
  );
}

export default WhatWeDo;
