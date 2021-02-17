import React from 'react';
import styled, { css } from 'styled-components';
import Accordion from '../Accordion';
import AccordionPanel from '../AccordionPanel'
import {BigSimpleTextInput} from "../BigSimple";
import {SmallSimpleTextInput} from "../SmallSimple";
import {SmallSimpleTextInputRus} from "../SmallSimpleRu";

export const PlansIncludeContainer = styled.div`
    width: 1068px;
    display: flex;
    flex-wrap: wrap;
    /*height: 486px;*/
    
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }
`;

export const IncludeContainer = styled.div`
    display: flex;
    width: 534px;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${props => props. paddingBottom};
    
    @media screen and (max-width: 720px) {
      width: 320px;
      height: inherit
      padding-bottom: 0
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
    height: 383px;
    
    @media screen and (max-width: 720px) {
      max-width: inherit;
      height: auto;
    }
`;

export const IncludeContainerRu = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:flex-start;
    align-items:stretch;
    width: 100%;
    max-width: 1078px;
    margin-top: 62px;
    height: 383px;
    
    @media screen and (max-width: 720px) {
      max-width: inherit;
      height: auto;
      margin-top: 37px;
    }
`;

export const IncludeContainerIndexRu = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:flex-start;
    align-items:stretch;
    width: 100%;
    max-width: 1078px;
    margin-top: 62px;
    margin-bottom: 140px;
    
    @media screen and (max-width: 720px) {
      max-width: inherit;
      height: auto;
      margin-bottom: 96px;
    }
`;

export const KeenSlider = styled.div`
    display: flex;
    max-width: 1626px;
    overflow: hidden;
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

export const WrapperCookies = styled.div`
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px 0;
    boxShadow: 0px -2px 6px 0px rgba(0,0,0,0.6);
    display: ${props => props. display};
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 999;
    
    button {
        height: 50px !important;
        padding: 0 30px;
            
        span {
            font-size: 16px;
        }
    }
    
    @media screen and (max-width: 800px) {
        button {
            height: 40px !important;
            padding: 0 20px;
            
            span {
                font-size: 16px;
            }
        }
    }
    
    @media screen and (max-width: 500px) {
        padding: 10px 5px;
        div {
            font-size: 14px;
        }
        button {
            height: 40px !important;
            padding: 0 20px;
            width: 160px;
            
            span {
                font-size: 16px;
            }
        }
    }
    
    `;

export const Slide = styled.div`
    width: 251px;
    height: 341px;
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
    z-index: ${props => props.visible ? '100' : '0'};
    background: linear-gradient(270deg, rgba(18, 18, 47, 0.24) 0%, rgba(18, 18, 47, 0) 62.95%),
        rgba(18, 18, 47, 0.92);
        
    @media screen and (max-width: 768px) {
      background: none
    }
`;
export const DarkRectangleRu = styled.div`
    height: 100%;
    width: 100%;
    opacity: 0.6;
    transition: all 0.2s;
    position: absolute;
    z-index: 120;
    background: linear-gradient(270deg, rgba(18, 18, 47, 0.24) 0%, rgba(18, 18, 47, 0) 62.95%),
        rgba(18, 18, 47, 0.92);
        
    @media screen and (max-width: 768px) {
      background: none
    }
`;

export const OverlayModal = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 200;
    height: 100%;
    background: linear-gradient(270deg, rgba(18, 18, 47, 0.24) 0%, rgba(18, 18, 47, 0) 62.95%),
        rgba(18, 18, 47, 0.92);
    opacity: 1;
`;

export const CommentCard = styled.div`
    overflow: visible;
    box-shadow: ${props => props.noShadow ? 'none'
    : '-10px -10px 15px rgba(28, 28, 72, 0.5), 10px 10px 15px rgba(8, 8, 22, 0.5)'};
    background: #46465d;
    transition: all 0.2s;
`;

export const Article = styled.article`
  overflow: visible;
    box-shadow: ${props => props.noShadow ? 'none'
  : '-10px -10px 15px rgba(28, 28, 72, 0.5), 10px 10px 15px rgba(8, 8, 22, 0.5)'};
    transition: all 0.2s;
    z-index: ${props => props.noShadow ? '102' : '150'}
`;

export const ArticleVideo = styled.article`
    overflow: visible;
      box-shadow: ${props => props.noShadow ? 'none'
    : '-10px -10px 15px rgba(28, 28, 72, 0.5), 10px 10px 15px rgba(8, 8, 22, 0.5)'};
    transition: all 0.2s;
    background: ${props => props.noShadow ? '#fff' : '#fff'};
    opacity: ${props => props.noShadow ? '0.9' : '1'};
    z-index: ${props => props.noShadow ? '102' : '150'};
    
    @media screen and (max-width: 768px) {
      background: transparent;
    }
`;

export const CommentContainer = styled.div`
    box-shadow: ${props => props.noShadow ? 'none' : '10px 10px 15px rgba(8, 8, 22, 0.5)'};
    height: 241px;
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
    padding: 0 12px;
    box-sizing: border-box;
    text-align: left;
    display: grid;
    grid-template-columns: 52px 1fr;
`;

export const AuthorPhoto = styled.div`
    overflow: hidden;
    max-height: 52px;
    max-width: 52px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.54);
    display: block;
    margin: auto
`;

export const Author = styled.span`
    margin: auto 0;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 20px;
    text-align: center;
    color: rgba(255, 255, 255, 0.54);
    padding-left: 14px
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
    padding: 0;
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

export const  TryAiButton = styled(BigButton)`
    margin: ${props => props.margin};
`;

export const Arrow = styled.svg`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    /* fill: #fff; */
    cursor: pointer;
    z-index: 200;
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
    
    @media screen and (max-width: 780px) {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 900;
      font-size: 32px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #FFFFFF;
      padding-left: 24px;
      padding-right: 24px;
    }
`;

export const PricingHeading = styled(CreateLargeHeading)`
    margin: 55px 0 0 0;
    max-width: 1078px
`;

export const IndexHeading = styled(CreateLargeHeading)`
    margin: ${props => props.top} 0 ${props => props.bottom ? '82px' : '0'} 0;
    max-width: 1078px;
    
    @media screen and (max-width: 780px) {
      margin: 112px 0 0 0;
      max-width: 90%;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 900;
      font-size: 32px;
      line-height: 40px;
      display: flex;
      align-items: flex-end;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
    }
`;

export const VideoHeadingRu = styled(CreateLargeHeading)`
    max-width: 1078px;
    margin-top: 140px;
    
    @media screen and (max-width: 780px) {
      max-width: 90%;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 900;
      font-size: 32px;
      line-height: 40px;
      display: flex;
      align-items: flex-end;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-top: 90px;
    }
`;

export const SearchHeadingRu = styled(CreateLargeHeading)`
    max-width: 1078px;
    margin-top: 65px;
    
    @media screen and (max-width: 780px) {
      max-width: 90%;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 900;
      font-size: 32px;
      line-height: 40px;
      display: flex;
      align-items: flex-end;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-top: 30px;
    }
`;

export const IndexHeadingRu = styled(CreateLargeHeading)`
    margin: ${props => props.top} 0 ${props => props.bottom ? '82px' : '0'} 0;
    max-width: 1078px;
    padding-bottom: 36px;
    display: block;
    
    @media screen and (max-width: 780px) {
      max-width: 100%;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 900;
      font-size: 32px;
      line-height: 40px;
      display: block;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      padding-bottom: 12px;
    }
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
      padding: 0 20px 0
    }
`;

export const SloganSmallRu = styled.span`
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.62);
    padding-bottom: 32px;
    
    @media screen and (max-width: 720px) {
      padding: 0 20px 0
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
export const PlanCardContainerRu = styled.div`
    width: 416px;
    height: 562px;
    max-height: 562px;
    background: #12122f;
    box-shadow: 10px 10px 20px rgba(8, 8, 22, 0.5), -10px -10px 20px rgba(28, 28, 72, 0.5);
    
    @media screen and (max-width: 780px) {
      width: 100%;
      padding: 0 23px;
      height: initial;
      max-height: initial;
    }
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
export const CardHeaderRu = styled.div`
    position: relative;
    flex-direction: column;*/
    text-align: center;
    width: 416px;
    height: 120px;
    background: #46465d;
    box-shadow: -10px -10px 20px rgba(47, 47, 80, 0.5), 10px 10px 20px rgba(8, 8, 22, 0.5);
    
    @media screen and (max-width: 780px) {
      width: 100%;
      padding: 0 23px;
    }
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
export const PlanHeadingRu = styled.span`
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    line-height: 65px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 1.2px;
    color: #ffffff;
    margin: 28px auto 27px auto;
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
    margin: ${props => props.margin};
    
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 112px 0 112px 0
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
    cursor: pointer;
    
    @media screen and (max-width: 780px) {
      margin-top: 52px;
    }
    
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
    margin: 0 auto 0 14px;
    
    @media screen and (max-width:780px) {
      margin: 0
    }
`;

export const SearchButtonRu = styled(BigButton)`
    min-width: 196px;
    width: 196px;
    margin: 0 auto 0 14px;
    
    @media screen and (max-width:780px) {
      min-width: 196px;
      width: 100%;
      max-width: 420px;
      margin: auto;
      height: 57px;
    }
`;

export const TryButton = styled(BigButton)`
    position: absolute;
    min-width: 288px;
    width: 288px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto 42px 14px;
    z-index: 101;
    cursor: pointer;
    
    @media screen and (max-width: 768px) {
      position: relative;
      min-width: 288px;
      width: 288px;
      -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      margin: 0;
      z-index: 101;
    }
`;


export const TryButtonRu = styled(BigButton)`
    position: absolute;
    min-width: 288px;
    width: 288px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto 42px 14px;
    z-index: 101;
    cursor: pointer;
    
    @media screen and (max-width: 768px) {
      position: relative;
      min-width: 99%;
      width:99%;
      -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      margin: 0;
      z-index: 101;
      height: 57px;
    }
`;

export const TryButtonPriceCard = styled(BigButton)`
    position: absolute;
    min-width: 288px;
    width: 288px;
    top: calc(100% - 90px);
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto 42px 14px;
    z-index: 101;
    cursor: pointer;
    
    @media screen and (max-width: 768px) {
      position: relative;
      min-width: 288px;
      width: 288px;
      -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      margin: 0;
      z-index: 101;
    }
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
export const FeatureRu = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: #fff;
    margin: 0 0 0 8px;
    text-align: left;
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
    margin: 14px 0 0 0;
    
    @media screen and (max-width: 780px) {
      margin: 24px 0 0 0;
    }
`;

export const MediumHeadingRu = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 14px 0 0 0;
    
    @media screen and (max-width: 780px) {
      margin: 24px 0 0 0;
    }
`;

export const MediumHeadingLeft = styled(MediumHeading)`
    text-align: left;
    line-height: 0;
    display: flex;
    float: right;
    width: calc(100% - 106px);
    
    @media screen and (max-width: 780px) {
      width: 100%;
      float: inherit;
      text-align: center;
      display: block;
      padding: 16px 0 0;
    }
`;

export const MediumHeadingLeftRu = styled(MediumHeadingRu)`
    text-align: left;
    display: block;
    margin: 0;
    /* margin: -45px 0 0 0; */
    /* width: calc(100% - 106px); */
    /* float: right;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;*/
    
    @media screen and (max-width: 780px) {
      width: 100%;
      float: inherit;
      text-align: center;
      display: block;
      padding: 16px 0 0;
    }
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
      min-width: calc(100% - 48px);
      max-width: calc(100% - 48px);
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
    
    @media screen and (max-width: 780px) {
      min-width: 100%;
      max-width: 100%;
    }
`;

export const PricingLargeHeading = styled(CreateLargeHeading)`
    margin: 132px 0 82px 0;
    
    @media screen and (max-width: 780px){
      margin: 112px 0 72px 0;
    }
`;

export const InputContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    margin: 20px 0 0 20px;
    padding: 0;
    width: 96%;
    
    @media (min-width: 561px) and (max-width: 1100px) {
      display: inline-flex;
      flex-direction: row;
      margin: 20px 20px 0;
      padding: 0;
      width: 80%;
      text-align: center;
    }
    
    @media screen and (max-width: 560px) {
      display: block;
      margin: 20px 20px 0;
      padding: 0;
      width: 90%;
      text-align: center;
    }
`;

export const InputContainerRu = styled.div`
    display: inline-flex;
    flex-direction: row;
    margin: 20px 0 0 37px;
    padding: 0;
    width: 96%;
    
    @media (min-width: 561px) and (max-width: 1100px) {
      display: inline-flex;
      flex-direction: row;
      margin: 20px 20px 0;
      padding: 0;
      width: 80%;
      text-align: center;
    }
    
    @media screen and (max-width: 560px) {
      display: block;
      margin: 20px 30px 0;
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

export const SmallSimpleTextInputStyled = styled(SmallSimpleTextInput)`
    flex: 0 1 auto;
    max-width:459px;
    width:100%;
    
    @media screen and (max-width:560px) {
      margin-bottom: 30px;
    }
`;

export const SmallSimpleTextInputRu = styled(SmallSimpleTextInputRus)`
    flex: 0 1 auto;
    max-width:459px;
    width:100%;
    
    @media screen and (max-width:560px) {
      margin-bottom: 14px;
    }
`;

/*const Input = styled.input`
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
`;*/

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
    margin: -45px 0 0 0;
    width: calc(100% - 106px);
    float: right;
    display: flex;
    
    @media screen and (max-width: 780px) {
      width: 100%;
      float: inherit;
      text-align: center;
      display: block;
      padding-left: 0;
      margin: 26px 0 0 0;
    }
`;

export const MediumSloganLeftRu = styled(MediumSlogan)`
    text-align: left;
    line-height: initial;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: -ms-flexbox;
    /* display: flex; */
    /* float: right; */
    /* width: calc(100% - 106px);*/
    
    @media screen and (max-width: 780px) {
      width: 100%;
      float: inherit;
      text-align: center;
      display: block;
      padding-left: 0;
      margin: 8px 0 0 0;
    }
`;

export const ShowMore = styled.div`
    background: url("../../img/showMore.svg") no-repeat;
    width: 24px;
    height: 20px;
    float: right;
    
    &:hover {
      background: url("../../img/ShowMoreActive.svg") no-repeat;
    }
`;

export const ShowMoreWhite = styled.div`
    background: url("../../img/ShowMoreWhite.svg") no-repeat;
    width: 18px;
    height: 15px;
    float: right;
    
    &:hover {
      background: url("../../img/ShowMoreActive.svg") no-repeat;
      background-size: cover;
    }
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
