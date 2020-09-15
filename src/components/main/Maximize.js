import React from 'react';
import Instagram from "../../img/instagram.svg";
import {BigButtonStyled} from "../pricing/styledComponents";
import YouTube from "../../img/youtube.svg";
import {Link} from "gatsby";
import Facebook from "../../img/facebook.svg";

const Maximize = () => {
  return (
    <>
      <div className='marketing-videos' style={{marginTop: '82px'}}>
        <div className='marketing-videos--content'>
          <div className='maximize-text--inner'>
            <img src={Instagram} alt="Instagram" style={{margin: 'auto'}} loading="lazy" />
            <span className='marketing-videos--title is-paddigg-5'>Instagram Stories ads</span>
            <span className='marketing-videos--text'>
              Launch an advertising campaign in Facebook Ads Manager or in Page ads
              (using the Promote button on your Instagram Page) and show your ads on Instagram
            </span>
            <BigButtonStyled
              text='Learn more'
              onClick={() => {
                window.location.href = '/industries/#vertical'
              }}
            />
          </div>
        </div>
        <div className='marketing-videos--content'>
          <div className='maximize-text--inner'>
            <img src={YouTube} alt="YouTube" style={{margin: 'auto'}} loading="lazy" />
            <span className='marketing-videos--title is-paddigg-5'>YouTube ads</span>
            <span className='marketing-videos--text'>
              Let people find you with YouTube and Google Display Network ads
            </span>
            <BigButtonStyled
              text='Learn more'
              component={Link}
              to="/industries/#wide"
              onClick={() => {
                window.location.href = '/industries/#wide'
              }}
            />
          </div>
        </div>
        <div className='marketing-videos--content'>
          <div className='maximize-text--inner'>
            <img src={Facebook} alt="Facebook" style={{margin: 'auto'}} loading="lazy" />
            <span className='marketing-videos--title is-paddigg-5'>Facebook video ads</span>
            <span className='marketing-videos--text'>
              Run an advertising campaign in Facebook Ads Manager and show your ads on Facebook and the Audience Network
            </span>
            <BigButtonStyled
              text='Learn more'
              onClick={() => {
                window.location.href = '/industries/#square'
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default Maximize;
