import React, {useEffect} from 'react'
import loadable from '@loadable/component'
import Layout from '../components/Layout';
import {
  SmallSimpleTextInputStyled,
  InputContainer,
  IndexHeading,
  PricingHeading,
  PricingPageContainer,
  SloganSmall,
  TryButton,
  SearchButtonRu, IndexHeadingRu, DarkRectangle, OverlayModal,
} from '../components/pricing/styledComponents';
import SliderVideo from "../components/blog/SliderVideo";

const HowItWorksRu = loadable(() => import('../components/main/HowItWorksRu'));
const AutomaticCreat = loadable(() => import('../components/main/AutomaticCreatRu'));
const ScCookie = loadable(() => import('../components/Cookies'));
const PriceInfo = loadable(() => import('../components/main/PriceInfoRu'));

const IndexPageTemplate = () => {
  return (
    <Layout>
      <PricingPageContainer>
        <PricingHeading>АНИМИРУЙ EMAIL</PricingHeading>
        <SloganSmall>Добавь видео товаров в email-рассылку и увеличь CTR</SloganSmall>
        <VideoBanner/>
        <HowItWorksRu/>
        <SearchYourLinkRu />
        <IndexHeading top={'138px'}>ПРИМЕРЫ ГОТОВЫХ ВИДЕО</IndexHeading>
        <SliderVideo />
        <IndexHeading top={'152px'}>АВТОМАТИЧЕСКИ СОЗДАННЫЕ ВИДЕО ИЗ ТОВАРНЫХ ФОТО</IndexHeading>
        <AutomaticCreat />
        <BeforeAfter/>
        <PriceInfo/>
      </PricingPageContainer>
      <ScCookie />
      {/*<ModalThanks/>*/}
    </Layout>
  )
};

export default IndexPageTemplate

function VideoBanner() {
  useEffect(() => {
    document.querySelector('#mainVideo').play()
  }, [typeof document !== 'undefined' && document.querySelector('#mainVideo')]);

  return (
    <div className='video-banner'>
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
      <TryButton
        text='Узнать больше'
        onClick={() => {
          document.getElementById('videoEmail').scrollIntoView();
        }}
      />
    </div>
  )

}

function SearchYourLinkRu() {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <form
      className='SearchYourLinkSmall'
      id='videoEmail'
      data-netlify='true'
      name="contact"
    >
      <input type='hidden' name='contact' value='videoEmail' />
      <InputContainer>
        <SmallSimpleTextInputStyled
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
            let myForm = document.getElementById('videoEmail');
            let formData = new FormData(myForm)
            fetch('/', {
              method: 'POST',
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": document.getElementById('videoEmail').getAttribute("name"),
                "email": document.querySelector("input[name='email']").value,
              })
            }).then(() => console.log('Form successfully submitted')).catch((error) =>
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
        <img width={'440'} height={'782'} src='../img/foxtrot_3.webp?1e26' />
      </div>
      <div className='after-item'>>
        <IndexHeadingRu>ПОСЛЕ</IndexHeadingRu>
        {/*<video
          autoPlay={true}
          preload='auto'
          loop={true}
          playsinline
          id='beforeVideo'
          loading="lazy"
          muted={true}
        >
          <source src='../img/foxtrot_31.mp4?1e26' type='video/mp4' />
        </video>*/}
        <img width={'440'} height={'782'} src='../img/foxtrot_31.webp?1e26' />
      </div>
    </div>
  )
}

function ModalThanks() {
  return(
    <>
      <div id='modal' style={{display: 'none'}}>>
        <PricingHeading>Спасибо</PricingHeading>
        <SloganSmall>Мы свяжемся с вами</SloganSmall>
        <OverlayModal />
      </div>
    </>
  )
}
