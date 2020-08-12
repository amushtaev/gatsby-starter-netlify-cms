import React from 'react'
import PropTypes from 'prop-types'

const PreviewCompatibleImageRelated = ({ imageInfo }) => {
  const { alt = '', image } = imageInfo;

  if (!!image) return <img src={image.childImageSharp.fluid.src} alt={alt} />;

  return null
};

PreviewCompatibleImageRelated.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
};

export default PreviewCompatibleImageRelated
