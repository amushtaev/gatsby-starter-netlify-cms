import React from 'react';
import styled, { css } from 'styled-components';
import Accordion from '../Accordion';
import AccordionPanel from '../AccordionPanel'
import {BigSimpleTextInput} from "../BigSimple";

export const PlansIncludeContainer = styled.div`
    width: 1068px;
    height: 621px;
    display: flex;
    flex-wrap: wrap;
    
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }
`;

export const IncludeContainer = styled.div`
    display: flex;
    width: 534px;
    height: 240px;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 720px) {
      width: 320px
    }
`;

export const IncludeContainerIndex = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:flex-start;
    align-items:stretch;
    width: 100%;
    max-width: 1078px;
    margin-top: 62px;
    
    @media screen and (max-width: 720px) {
      max-width: inherit
    }
`;

export const KeenSlider = styled.div`
    display: flex;
    max-width: 1626px;
    width: 1626px;
    overflow-y: visible;
    position: relative;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    
    @media screen and (max-width: 768px) {
      width: 100%;
    }
`;

export const Slide = styled.div`
    width: 251px;
    height: 314px;
    align-items: center;
    justify-content: center;
    overflow: visible;
`;

export const DarkRectangle = styled.div`
    height: 100%;
    width: 100%;
    opacity: ${props => props.visible ? '1' : '0'};
    transition: all 0.2s;
    position: absolute;
    background: linear-gradient(270deg, rgba(18, 18, 47, 0.24) 0%, rgba(18, 18, 47, 0) 62.95%),
        rgba(18, 18, 47, 0.82);
        
    @media screen and (max-width: 768px) {
      background: none
    }
`;

export const CommentCard = styled.div`
    overflow: visible;
    box-shadow: ${props => props.noShadow ? 'none'
    : '-10px -10px 15px rgba(28, 28, 72, 0.5), 10px 10px 15px rgba(8, 8, 22, 0.5)'};
    background: #46465d;
    transition: all 0.2s;
`;

export const CommentContainer = styled.div`
    box-shadow: ${props => props.noShadow ? 'none' : '10px 10px 15px rgba(8, 8, 22, 0.5)'};
    height: 214px;
    padding: 24px;
    box-sizing: border-box;
    background: #12122f;
    text-align: center;
`;

export const Comment = styled.span`
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #fff;
`;

export const AuthorContainer = styled.div`
    height: 100px;
    padding: 24px;
    box-sizing: border-box;
    text-align: left;
    display: flex;
`;

export const AuthorPhoto = styled.div`
    overflow: hidden;
    max-height: 52px;
    max-width: 52px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.54);
    margin: 0 14px 0 0;
`;

export const Author = styled.span`
    margin: auto 0;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: rgba(255, 255, 255, 0.54);
`;

export const Dots = styled.div`
    display: flex;
    padding: 15px 0 0 0;
    justify-content: center;
`;

export const Dot = styled.button`
    :focus {
        outline: none;
    }
    border: none;
    width: 12px;
    height: 12px;
    background: ${props =>
      props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)'};
    border-radius: 50%;
    margin: 0 6px;
    cursor: pointer;
`;

const Button = styled.button`
    align-items: center;
    align-content: center;
    justify-content: center;
    display: inline-flex;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    height: 64px;
    background: ${props =>
  props.disabled
    ? '#fed300'
    : '#fed300'};
    border-radius: 60px;
    border: none;
    outline: none;
    padding: 0 40px;

    &:active {
        background: #fed300;
    }

    &:active span {
        color: ${props =>
        props.disabled ? '#000000' : '#ffffff'};
    }
`;

const SmallButton = styled.button`
    background: rgba(0, 0, 0, 0.54);
    border: 1px solid #FED300;
    box-sizing: border-box;
    border-radius: 24px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FED300;
    justify-content: center;
    align-self: center;

    &:hover {
        background: rgba(0, 0, 0, 1.0);
    }
    & span {
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FED300;
    }
`;

const Label = styled.span`
    display: inline-block;
    flex: 0 0 auto;
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.disabled ? '#000000' : '#000000'};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`;

export const BigButton = (props) => {
  const {className, disabled, onClick, text, submit} = props;
    return (
      <Button
        className={className}
        type={submit !== undefined && submit ? 'submit' : 'button'}
        disabled={disabled}
        onClick={onClick}
      >
          <Label disabled={disabled} text={text}>
              {text}
          </Label>
      </Button>
    );
};

export const BlackButton = (props) => {
  const {className, disabled, onClick, text, submit} = props;
  return (
    <SmallButton
      className={className}
      type={submit !== undefined && submit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      <Label disabled={disabled} text={text}>
        {text}
      </Label>
    </SmallButton>
  );
};

export const TryAiButton = styled(BigButton)`
    margin: 82px 0 0 0;
`;

export const Arrow = styled.svg`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    /* fill: #fff; */
    cursor: pointer;
    ${props => props.left ? 'left: 110px;' : 'left: auto; right: 110px;'}
`;

export const DivAllPlansInclude = styled.div`
    width: 1068px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 1067px) {
      width: 100%;
    }
`;

export const PricingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CreateLargeHeading = styled.span`
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 52px;
    line-height: 65px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
`;

export const PricingHeading = styled(CreateLargeHeading)`
    margin: 55px 0 0 0;
    max-width: 1078px
`;

export const IndexHeading = styled(CreateLargeHeading)`
    margin: 152px 0 0 0;
    max-width: 1078px
`;

export const SloganSmall = styled.span`
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.84);
    padding-bottom: 32px;
    
    @media screen and (max-width: 720px) {
      padding: 0 20px 32px
    }
`;

export const TumblerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 44px 1fr;
    grid-column-gap: 24px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 72px auto 72px auto;
`;

export const PlanType = styled.span`
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    text-transform: uppercase;
    color: ${props => props.checked ? '#fff' : 'rgba(255, 255, 255, 0.64)'};
`;

export const TestBox = styled.div`
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    border-radius: 22px;
    cursor: pointer;
    width: 40px;
    height: 22px;
    max-height: 22px;
    background-color: #fff;
`;

export const Check = styled.div`
    margin: ${props => props.checked ? '2px 0 0 20px' : '2px 0 0 2px'};
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: #12122f;
`;

export const Discount = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #fed300;
    opacity: 0.96;
`;

export const Pricing = styled.div`
    align-items: center;
    width: 1076px;
    
    @media screen and (max-width: 1075px) {
      width: 100%;
    }
`;

export const ItemsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    margin: 0;
    justify-content: space-between;
`;

export const PlanCardContainer = styled.div`
    width: 306px;
    height: 532px;
    max-height: 532px;
    background: #12122f;
    box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.05), 10px 10px 20px rgba(0, 0, 0, 0.25);
`;

export const Tier = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;

export const CardHeader = styled.div`
    position: relative;
    /*display: flex;
    flex-direction: column;*/
    text-align: center;
    /*justify-content: center;*/
    width: 306px;
    height: 196px;
    background: #46465d;
    box-shadow: -10px -10px 20px rgba(47, 47, 80, 0.5), 10px 10px 20px rgba(8, 8, 22, 0.5);
    ${props => props.pro ? 'border: 2px solid #fff;' : undefined}
    ${props => props.pro ? 'box-sizing: border-box;' : undefined}
`;

export const PopularLabel = styled.div`
    width: 88px;
    height: 26px;
    position: absolute;
    background: #fff;
    border-radius: 25px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #000;
    top: -13px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`;

export const PlanHeading = styled.span`
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 20px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 1.2px;
    color: #ffffff;
    margin: 42px auto 24px auto;
    width: min-content;
`;

export const PlanInfo = styled.div`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: rgba(255, 255, 255, 0.54);
    margin: 0 24px;
`;

export const DivAskedQuestions = styled.div`
    width: 1068px;
    align-items: center;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 768px) {
      width: 100%
    }
`;

export const DivAccordion = styled.div`
    display: flex; 
    flex-direction: row;
    
    @media screen and (max-width: 1040px) {
      flex-direction: column;
      max-width: 100%;
    }
`;

export const DivPasteYourLink = styled.div`
    width: 1068px;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 0 98px 0;
    
    @media screen and (max-width: 768px) {
      width: 100%
    }
`;

export const CustomPricing = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 2px;
    color: #fff;
    margin: 82px auto 121px auto;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: 32px 0 0 0;
`;

export const OldPrice = styled.span`
    visibility: ${props => props.check ? 'visible' : 'hidden'};
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-decoration-line: line-through;
    color: rgba(255, 255, 255, 0.72);
    margin: 0 0 8px 0;
`;

export const Price = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 2px;
    color: #fff;
    margin: 0 0 6px 0;
`;

export const Per = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
    margin: 6px 0 0 3px;
`;

export const BilledAnnually = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.54);
    margin: 8px 0 0 0;
`;

export const DownloadVideos = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;Search
    line-height: 25px;
    text-align: center;
    color: #fff;
    margin: 42px 0;
`;

export const ChooseButton = styled(BigButton)`
    width: 196px;
    margin: 0 auto 42px auto;
`;

export const VideoButton = styled(BlackButton)`
    width: 84px;
    height: 28px;
    margin: 0 auto;
    position: relative;
    z-index: 101;
    cursor: pointer;
`;

export const AllIndustriesButton = styled(BlackButton)`
    width: 288px;
    height: 64px;
    border: 2px solid #FED300;
    box-sizing: border-box;
    border-radius: 60px;
    background: transparent;
    margin-top: 92px;
    
    span {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #FFFFFF;
    }
`;

export const SearchButton = styled(BigButton)`
    min-width: 196px;
    width: 196px;
    margin: 0 auto 42px 14px
`;

export const TryButton = styled(BigButton)`
    position: absolute;
    min-width: 288px;
    width: 288px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto 42px 14px
`;

export const Feature = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: #fff;
    margin: 0 0 0 8px;
`;

export const MediumHeading = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 24px 0 0 0;
`;

export const MediumHeadingLeft = styled(MediumHeading)`
    text-align: left;
    padding-left: 24px;
    line-height: 0;
    display: flex;
    float: right;
    width: calc(100% - 106px)
`;


export const AccordionWithMargin = styled(Accordion)`
    margin: 0 24px 0 0;
    
    @media screen and (max-width: 1040px) {
      margin: 0
    }
`;

export const QuestionPanel = styled(AccordionPanel)`
    min-width: 526px;
    max-width: 526px;
    box-sizing: border-box;
    min-height: 124px;
    background: #46465d;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.15);
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    padding: 32px 24px;
    
    @media screen and (max-width: 560px) {
      min-width: calc(100% - 20px);
      max-width: calc(100% - 20px);
      margin: 0 auto;
    }
`;

export const Answer = styled.div`
    box-sizing: border-box;
    min-width: 526px;
    max-width: 526px;
    padding: 24px;
    background: #12122f;
    /* background: transparent; */
    box-shadow: 0px 0px 0px rgba(28, 28, 72, 0.5), 0 10px 20px rgba(8, 8, 22, 0.5);
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: #fff;
`;

export const PricingLargeHeading = styled(CreateLargeHeading)`
    margin: 130px 0 82px 0;
`;

export const InputContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    margin: 20px 0 0 20px;
    padding: 0;
    width: 96%;
    
    @media screen and (max-width: 560px) {
      display: block;
      margin: 20px 20px 0;
      padding: 0;
      width: 90%;
      text-align: center;
    }
`;

export const BigSimpleTextInputStyled = styled(BigSimpleTextInput)`
    flex: 0 1 auto;
    
    @media screen and (max-width:560px) {
      margin-bottom: 30px;
    }
`;

const Input = styled.input`
    background: #f4f4f4;
    border: none;
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    outline: none;
    height: 100%;
    width: 100%;
`;

export const BigButtonStyled = styled(BigButton)`
    flex: 1 0 auto;
    margin-left: 8px;
`;

export const MediumSlogan = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    margin: 8px 0 0 0;
    color: rgba(255, 255, 255, 0.54);
    width: 320px;
`;

export const MediumSloganLeft = styled(MediumSlogan)`
    text-align: left;
    padding-left: 24px;
    margin: -36px 0 0 0;
    width: calc(100% - 106px);
    float: right;
    display: flex
`;

export const softcubeDark = {
  global: {
    colors: {
      background: 'transparent',
      brand: '#121527',
      control: 'rgba(255,255,255,0.14)',
      focus: 'transparent',
      'sc-cancel-button-text-inactive': '#8A8A8F',
      'sc-button-text-active': '#000000',
      'sc-menu-icon': '#BBBDC7',
      'sc-menu-background': '#FFFFFF',
      'sc-menu-background-hover': '#EFEFEF',
      'sc-keyword-text-input-bg': '#f4f4f4',
      'sc-keyword-text-input-border': '#bbbdc7',
      'sc-checkbox-text-color': '#FFFFFF',
      'sc-button-stroke': '#202338',
      'sc-yellow-1': '#ffefe3',
      'sc-yellow-2': '#F3E946', // 'accent-2'
      'sc-yellow-3': '#FED300',
      'sc-light-gray': '#BBBDC7', // light-2
      'sc-white': '#FFFFFF', // light-1
      'sc-dark-blue': '#121527',
      'sc-header-menu-background': '#12122F',
      'sc-effects-border': '#888a93',
      'sc-effects-background': '#252838',
      'sc-node-container-background': '#3C4157',
      'sc-node-container-border': '#232845',
      'sc-node-icon-background': '#1e2134',
      'sc-light-blue-1': '#4A5279',
      'sc-light-blue-2': '#6A7196',
      'sc-light-blue-3': '#6A6F88',
      'sc-black': '#000000', // dark-1
      'neutral-1': '#006996',
      'neutral-2': '#A65336',
      'neutral-3': '#A69136',
      'neutral-4': '#774677',
      'accent-1': '#E6734B',
      'accent-2': '#F3E946',
      'accent-3': '#915591',
      'status-critical': '#F04B37',
      'status-warning': '#F0AA3C',
      'status-ok': '#509137',
      'status-unknown': '#848484',
      'status-disabled': '#848484',
      'dark-1': '#000000',
      'dark-2': '#676767',
      'light-1': '#FFFFFF',
      'light-2': '#BBBDC7',
      'light-3': '#CCCCCC',
      icon: '#FFFFFF',
    },
    font: {
      family: '"Roboto", sans-serif',
      face: '@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);',
    },
    input: {
      padding: '8px',
    },
  },
  tab: {
    border: {
      color: {
        dark: 'dark-2',
        light: 'light-3',
      },
    },
  },
  anchor: {
    color: '#dadada',
  },
  button: {
    extend: css`
            ${props => props.plain &&  `
                font-style: normal;
                font-weight: normal;
            `}
        `,
  },
  rangeInput: {
    thumb: {
      extend: css`
                border-radius: 4px;
                width: 8px;
            `,
    },
    track: {
      color: '#dadada',
      height: '2px',
      extend: css`
                border-radius: 1px;
            `,
    },
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px',
    },
  },
};
