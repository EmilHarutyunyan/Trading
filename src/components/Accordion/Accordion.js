import React from "react";
import useHideShow from "../../hooks/useHideShow";
import { FaAngleUp } from "react-icons/fa";
import { Wrapper, Accord, QuestionBtn, Panel } from "./Accordion.styles";


function Accordion({ question:{question,answer} }) {
  const [headerRef,childrenRef, showLinks,setShowLinks] = useHideShow();
  return (
    <Wrapper>
      <Accord>
        <QuestionBtn
          type='button'
          className={showLinks ? "active" : null}
          onClick={() => setShowLinks(!showLinks)}
        >
          {question} <FaAngleUp />
        </QuestionBtn>
        <Panel ref={headerRef}>
          <div ref={childrenRef}>
          {answer && answer.map(el => <p>{el}</p>)}
          </div>
        </Panel>
      </Accord>
    </Wrapper>
  );
}
export default Accordion;
