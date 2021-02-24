import React, {useState} from 'react';
import {QuestionsAnswersVideo} from "../emailvideo/textContentVideo";
import {
  AnswerVideo,
  DivAccordionVideo,
  DivAskedQuestions, FaqHeading,
  QuestionPanelVideo, softcubeDark,
} from "../pricing/styledComponents";
import Accordion from "../Accordion";

function PanelLabelVideo(props) {
  const {text} = props;
  return <span style={{ textAlign: 'left' }}>{text}</span>;
}

function PanelAnwerLabelVideo(props) {
  const {text, bold} = props;
  return (
    text.map((text, index) => (
      bold[0] && index ===  bold[1] ? <p style={{fontWeight:'bold'}} key={`text:${index}`}>{text}</p> : <p key={`text:${index}`}>{text}</p>
    )))
}

const FrequentlyAskedQuestionsVideo = () => {
  const [QuestionsAnswers] = useState([QuestionsAnswersVideo]);

  return (
    <DivAskedQuestions className="faq-question-panel">
      <FaqHeading>
        FAQ
      </FaqHeading>
      <DivAccordionVideo>
        <Accordion animate={false} gap='0' multiple className='videoPageAccordion'>
          {QuestionsAnswers[0].map((qa, index) => (
            <QuestionPanelVideo
              key={`question:${qa.question}`}
              label={<PanelLabelVideo text={qa.question} />}
              activeColor={softcubeDark.global.colors['sc-yellow-3']}
            >
              <AnswerVideo
                key={`answer:${index}`}
                id={`answer${index}`}
              >
                <PanelAnwerLabelVideo
                  key={`answer:${qa.answer}`}
                  text={qa.answer}
                  bold={qa.bold}
                  index={index}
                />
              </AnswerVideo>
            </QuestionPanelVideo>
          ))}
        </Accordion>
      </DivAccordionVideo>
    </DivAskedQuestions>
  );
}

export default FrequentlyAskedQuestionsVideo;
