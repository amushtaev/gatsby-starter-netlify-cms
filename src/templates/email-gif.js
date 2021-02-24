import React, {useEffect, useState} from 'react'
import loadable from '@loadable/component'
import LayoutEmail from '../components/LayoutEmail';
import {
  InputContainer,
  PricingHeading,
  PricingPageContainer,
  SloganSmall,
  SearchButtonRu,
  IndexHeadingRu,
  OverlayModal,
  TryButtonRu,
  SmallSimpleTextInputRu,
  SloganSmallRu,
  VideoHeadingRu,
  SearchHeadingRu,
} from '../components/pricing/styledComponents';
import SliderVideo from "../components/emailvideo/SliderVideo";
import FrequentlyAskedQuestionsVideo from "../components/emailvideo/FrequentlyAskedQuestionsVideo";

const HowItWorksRu = loadable(() => import('../components/emailvideo/HowItWorksRu'));
const AutomaticCreat = loadable(() => import('../components/emailvideo/AutomaticCreatRu'));
const ScCookie = loadable(() => import('../components/Cookies'));
const PriceInfo = loadable(() => import('../components/emailvideo/PriceInfoRu'));

const IndexPageTemplate = () => {
  return (
    <LayoutEmail>
      <PricingPageContainer>
        <PricingHeading>АНИМИРУЙ EMAIL</PricingHeading>
        <SloganSmallRu>Добавь видео товаров в email-рассылку и увеличь CTR</SloganSmallRu>
        <VideoBanner/>
        <HowItWorksRu/>
        <SearchHeadingRu
          id='videoEmailTop'
        >ПОЛУЧИТЬ ДОСТУП</SearchHeadingRu>
        <SearchYourLinkRu />
        <VideoHeadingRu>ПРИМЕРЫ ГОТОВЫХ ВИДЕО</VideoHeadingRu>
        <SliderVideo />
        <VideoHeadingRu>АВТОМАТИЧЕСКИ СОЗДАННЫЕ ВИДЕО ИЗ ТОВАРНЫХ ФОТО</VideoHeadingRu>
        <AutomaticCreat />
        <BeforeAfter/>
        <PriceInfo/>
        <FrequentlyAskedQuestionsVideo/>
      </PricingPageContainer>
      <ScCookie />
      <ModalThanks/>
    </LayoutEmail>
  )
};

export default IndexPageTemplate

function VideoBanner() {
  useEffect(() => {
    document.querySelector('#mainVideo').play()
  }, [typeof document !== 'undefined' && document.querySelector('#mainVideo')]);

  return (
    <div className='video-banner email-page-top'>
      <div className='video-banner--conteiner'>
        <video
          className='video-item__content_banner email-page-top'
          autoPlay={true}
          preload='auto'
          poster='../img/main_email-gif.jpf?1e26'
          loop={true}
          playsInline
          id='mainVideo'
          loading='lazy'
          muted={true}
          width={'1078'}
          height={'490'}
        >
          <source src='../img/main_email-gif.webm?1e26' type='video/webm; codecs=vp9,vorbis' />
          <source src='../img/main_email-gif.mp4?1e26' type='video/mp4' />
        </video>
        {/*<img src='../img/main_email-gif-1?1e26' />*/}
      </div>
      <TryButtonRu
        text='Узнать больше'
        onClick={() => {
          document.getElementById('videoEmailTop').scrollIntoView();
        }}
      />
    </div>
  )

}

function SearchYourLinkRu() {
  const [inputValue, setInputValue] = React.useState('');
  /*var form = document.getElementById("videoEmail");
  function handleForm(event) { event.preventDefault(); }
  form.addEventListener('submit', handleForm);*/

  const onFormSubmit = e => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": document.getElementById('videoEmail').getAttribute("name"),
        "email": document.querySelector("input[name='email']").value,
      })
    }).then(() => {
      let validate = validateEmail(document.querySelector(".emailVal").innerHTML = document.querySelectorAll('input[name="email"]')[0].value);
      console.log('validate', validate);
      if(validate) {
        console.log('Form successfully submitted', validate);
        document.getElementById('modal').style.display = "block";
        document.querySelector(".emailVal").innerHTML = document.querySelectorAll('input[name="email"]')[0].value
      } else {
        //alert ("Заполните email")
      }
      }).catch((error) =>
      alert(error))

  };

  function validateEmail(email)
  {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <form
      onSubmit={onFormSubmit}
      className='SearchYourLinkSmall'
      id='videoEmail'
      data-netlify='true'
      name="contact"
    >
      <input type='hidden' name='contact' value='videoEmail' />
      <InputContainer>
        <SmallSimpleTextInputRu
          name='email'
          defaultValue={inputValue}
          placeholder='name@softcube.com'
          onChange={(value) => {
            setInputValue(value);
          }}
        />
        <SearchButtonRu
          text='Узнать больше'
          onClick={(e) => {
            e.preventDefault();

            fetch('/', {
              method: 'POST',
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": document.getElementById('videoEmail').getAttribute("name"),
                "email": document.querySelector("input[name='email']").value,
              })
            }).then(() => {
              let validate = validateEmail(document.querySelector(".emailVal").innerHTML = document.querySelectorAll('input[name="email"]')[0].value);
              if(validate){
                console.log('Form successfully submitted');
                document.getElementById('modal').style.display = "block";
                document.querySelector(".emailVal").innerHTML = document.querySelectorAll('input[name="email"]')[0].value
              } else {
                //alert ("Заполните email")
              }
            }).catch((error) =>
              alert(error))
          }}
        />
      </InputContainer>
    </form>
  );
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function BeforeAfter() {
  return (
    <div className='before-after'>
      <div className='before-item'>
        <IndexHeadingRu>ДО</IndexHeadingRu>
        <picture>
          <source srcSet="../img/foxtrot_3.webp" type="image/webp" />
            <img width={'440'} height={'782'} src='../img/foxtrot_3.jpg?1e26' />
        </picture>

      </div>
      <div className='after-item'>
        <IndexHeadingRu>ПОСЛЕ</IndexHeadingRu>
        <video
          autoPlay={true}
          preload='auto'
          poster='../img/foxtrot_3.jpg'
          loop={true}
          id="beforeVideo"
          playsInline
          loading='lazy'
          muted={true}
          width={'440'}
          height={'889'}
        >
          <source src='../img/foxtrot_31.mp4?1e26' type='video/mp4' />
        </video>
        {/*<img width={'440'} height={'782'} src='../img/foxtrot_31.webp?1e26' />*/}
      </div>
    </div>
  )
}

function ModalThanks() {
  const [emailVal, setemailVal] = useState();
  useEffect(() => {
    setemailVal(document.querySelectorAll('input[name="email"]')[0].value)
  });

  return(
    <>
      <div id='modal' style={{display: 'none'}}>
        <div className='closeModal'>
          <img id='closeModal'
               src='../img/modal.svg'
               onClick={() => {
                 document.getElementById('modal').style.display = "none";
               }}/>
          <div className='emailVal'>
            {emailVal}
          </div>
        </div>
        <OverlayModal />
      </div>
    </>
  )
}
