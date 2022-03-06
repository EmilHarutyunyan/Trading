import React from "react";

// import { FaAngleUp } from "react-icons/fa";
// Components
import Header from "../../components/Header/Header";
import Accordion from "../../components/Accordion/Accordion";

// Constatn
import { questions } from "../../utils/constant";
// Styles
import {
  Wrapper,
  Content,

} from "./Faq.styles";

function Faq() {
  
  return (
    <>
      <Header />
      <Wrapper className='main-container'>
        <Content>
          <h1>FAQ</h1>
          <h4>Your questions - Answered.</h4>
          {questions.map((question) => <Accordion question={question}/>)}
          
          {/* <AccBlock>
            <Accord >
              <QuestionBtn type='button' className={showLinks ? 'active': null} onClick={() => setShowLinks(!showLinks)}>
                How does the prize system work? <FaAngleUp />
              </QuestionBtn>
              <Panel ref={headerRef}>
              <div ref={childrenRef}>
                <p>
                  For every 100 traders who enter the competition, we increase
                  the prize pool by $10,000!
                </p>
                <p>
                  1st place will recieve 70% of the total pot, 2nd place secures
                  20% and 3rd place secures 10%. meaning if 1000 trades enter -
                  you could win up to $70,000 in cash!
                </p>
              </div>
              </Panel>
              
            </Accord>
          </AccBlock> */}
        </Content>
      </Wrapper>
    </>
  );
}

export default Faq;
