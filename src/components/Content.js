import React, {useLayoutEffect} from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => {

  useLayoutEffect(() => {
    const links = document.getElementById('html__content').querySelectorAll('a');
    links.forEach((link) => link.target = '_blank');
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
