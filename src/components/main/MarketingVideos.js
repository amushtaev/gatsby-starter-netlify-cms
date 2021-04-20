import React from 'react';
import {Link} from "@reach/router";
import {AllIndustriesButton} from "../pricing/styledComponents";
import Commerce from '../../img/commerce.svg'
import Electronics from '../../img/electronics.svg'
import Fitness from '../../img/fitness.svg'
import Food from '../../img/food.svg'
import Real from '../../img/real.svg'
import Travel from '../../img/travel.svg'

const MarketingVideos = () => {
  return (
    <>
      <div className='marketing-videos top-marketing--videos'>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#ecommerce'}
          >
            <img width='322' height='163' src={Commerce} alt="E-commerce" loading="lazy" />
            <span className='marketing-videos--title'>E-commerce</span>
          </Link>
        </div>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#food-and-delivery'}
          >
            <img width='322' height='163' src={Food} alt="Food & Delivery" loading="lazy" />
            <span className='marketing-videos--title'>Food & Delivery</span>
          </Link>
        </div>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#real-estate'}
          >
            <img width='322' height='163' src={Real} alt="Real Estate" loading="lazy" />
            <span className='marketing-videos--title'>Real Estate</span>
          </Link>
        </div>
      </div>
      <div className='marketing-videos bottom-marketing--videos'>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#fitness'}
          >
            <img width='322' height='163' src={Fitness} alt="Fitness" loading="lazy" />
            <span className='marketing-videos--title'>Fitness</span>
          </Link>
        </div>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#ecommerce'}
          >
            <img width='322' height='163' src={Electronics} alt="Electronics" loading="lazy" />
            <span className='marketing-videos--title'>Electronics</span>
          </Link>
        </div>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#travel'}
          >
            <img width='322' height='163' src={Travel } alt="Travel " loading="lazy" />
            <span className='marketing-videos--title'>Travel </span>
          </Link>
        </div>
      </div>
      <AllIndustriesButton
        text='View all industries'
        onClick={() => {
          //hist.push(`/create?link=${inputValue}`);
          window.location.href = '/industries'
        }}
      />
    </>
  )
};

export default MarketingVideos;
