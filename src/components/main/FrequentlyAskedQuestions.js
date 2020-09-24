import React, {useState} from 'react';
import {QuestionsAnswersFirstColumnIndex, QuestionsAnswersSecondColumnIndex} from "../pricing/textContent";
import {
  AccordionWithMargin, Answer,
  DivAccordion,
  DivAskedQuestions,
  PricingLargeHeading,
  QuestionPanel, softcubeDark
} from "../pricing/styledComponents";
import Accordion from "../Accordion";

function PanelLabel(props) {
  const {text} = props;
  return <span style={{ width: '440px', textAlign: 'left' }}>{text}</span>;
}

const FrequentlyAskedQuestions = () => {
  const [QuestionsAnswersFirst] = useState([QuestionsAnswersFirstColumnIndex]);
  const [QuestionsAnswersSecond] = useState([QuestionsAnswersSecondColumnIndex]);

  return (
    <DivAskedQuestions>
      <PricingLargeHeading style={{ margin: '130px 0 82px 0' }}>
        FREQUENTLY ASKED QUESTIONS
      </PricingLargeHeading>
      <DivAccordion>
        <AccordionWithMargin animate={false} gap='24px' multiple>
          {QuestionsAnswersFirst[0].map((qa) => (
            <QuestionPanel
              key={`question:${qa.question}`}
              label={<PanelLabel text={qa.question} />}
              activeColor={softcubeDark.global.colors['sc-yellow-3']}
            >
              <Answer>{qa.answer}</Answer>
            </QuestionPanel>
          ))}
        </AccordionWithMargin>
        <Accordion animate={false} gap='24px' multiple className='secondAccordion'>
          {QuestionsAnswersSecond[0].map((qa) => (
            <QuestionPanel
              key={`question:${qa.question}`}
              label={<PanelLabel text={qa.question} />}
              activeColor={softcubeDark.global.colors['sc-yellow-3']}
            >
              <Answer>{qa.answer}</Answer>
            </QuestionPanel>
          ))}
        </Accordion>
      </DivAccordion>
    </DivAskedQuestions>
  );
}

export default FrequentlyAskedQuestions;
