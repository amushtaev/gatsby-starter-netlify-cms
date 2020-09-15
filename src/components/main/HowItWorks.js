import React from 'react'
import {Compile, Crawl, Selecting} from "../../img/icons";
import {softcubeDark} from "../pricing/styledComponents";

const HowItWorks = () => {
  return (
    <>
      <div className='marketing-videos how' style={{marginTop: '62px'}}>
        <div className='marketing-videos--content'>
          <Crawl
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <div className='works-text--inner'>
            <span className='marketing-videos--title'>Crawl your listing page</span>
            <span className='marketing-videos--text'>
              The Softcube AI scans your listing page and gets important information for creating your video ad
            </span>
          </div>
        </div>
        <div className='marketing-videos--content'>
          <Selecting
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <div className='works-text--inner'>
            <span className='marketing-videos--title'>Selecting footage</span>
            <span className='marketing-videos--text'>
              The AI algorithm picks the best-suited scenes from
              Softcube's product video library of over 2 million clips
            </span>
          </div>
        </div>
        <div className='marketing-videos--content last'>
          <Compile
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <div className='works-text--inner'>
            <span className='marketing-videos--title'>Compile the video ad</span>
            <span className='marketing-videos--text'>
              Softcube customizes a template with product- or industry-specific videos,
              text from the listing page, your logo, and your brand colors
            </span>
          </div>
        </div>
        {/*<VideoHowItWorks />*/}
      </div>
    </>
  )
};

export default HowItWorks;
