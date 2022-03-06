import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
// Styles
import {
  Wrapper,
  Content,
  Info,
  InfoTitle,
  InfoBlock,
} from "./Competitions.styles";
function Competitions() {
  
  return (
    <>
    <Header />
    <Wrapper>
      <Content>
        <h1>COMPETITION</h1>
        <h4>Could you be crowned trading World Series champion?</h4>
        <Info>
          <InfoTitle>This months Current total competitiors: 375</InfoTitle>
          <InfoBlock>
            <div>
            <p>
              For every 100 traders who enter the competition, we increase the
              total prize pool by $10,000!
            </p>
            <h5>
              Thats right! If 1000 traders enter.. you could win upto $70,000 in cash.
            </h5>
            <p>
              Simply click ''ENTER NOW'' below. Link your trading account and
              start competing.
            </p>
            <button type='button' className='btn-enter'>
              <Link to='/'>ENTER NOW</Link>
            </button>
            <button type='button' className='btn-view'>
              <Link to='/'>view leaderboard</Link>
            </button>
            </div>
          </InfoBlock>
        </Info>
      </Content>
    </Wrapper>
    </>
  );
}
export default Competitions;
