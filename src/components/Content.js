import React, {useLayoutEffect} from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => {

  useLayoutEffect(() => {
    const links = document.getElementById('html__content').querySelectorAll('a');
    links.forEach((link) => link.target = '_blank');

    document.querySelectorAll(".blog-iframe").forEach((item) => {
      let hEl = item.querySelector("iframe").getAttribute('height');
      let wEl = item.querySelector("iframe").getAttribute('width');
      let wIt = item.offsetWidth/wEl;
      let wSc = wIt;
      if(typeof window !== 'undefined') {
        wSc = window.screen.width
      }
      if(wEl * 1 > wSc){
        item.style.height = hEl * wIt + 'px'
      }
    })

  }, []);

  return <div id={'html__content'} className={className} dangerouslySetInnerHTML={{__html: content}}/>;
};

const Content = ({ content, className }) => (
  <div itemProp="description" className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content
