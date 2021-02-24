import React from 'react'
import {VideoEditor, AnimateEmail, SendEmail, LineVideo} from "../../img/icons";
import {softcubeDark} from "../pricing/styledComponents";

const HowItWorks = () => {
  return (
    <>
      <div className='marketing-videos how'>
        <div className='marketing-videos--content'>
          <VideoEditor/>
          <div className='works-text--inner-ru'>
            <span className='marketing-videos--text'>
              Мы создали простой видеоредактор, который автоматически превратит твои фото товаров в видео
            </span>
          </div>
        </div>
        <div className='marketing-videos--content'>
          <AnimateEmail/>
          <div className='works-text--inner-ru'>
            <span className='marketing-videos--text'>
              Теперь можно анимировать email письма в два клика
            </span>
          </div>
        </div>
        <div className='marketing-videos--content last'>
          <SendEmail/>
          <div className='works-text--inner-ru'>
            <span className='marketing-videos--text'>
              Начни сейчас – просто отправь нам свой email
            </span>
          </div>
        </div>
        <LineVideo/>
        {/*<VideoHowItWorks />*/}
      </div>
    </>
  )
};

export default HowItWorks;
