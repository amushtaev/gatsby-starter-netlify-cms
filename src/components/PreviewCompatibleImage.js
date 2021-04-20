import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '0', height: 'auto', width: '100%', maxWidth: 'initial' };
  const { alt = '', childImageSharp, image, fullImage, width, height } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return (
      <picture>
        <source type="image/webp" srcSet={image} />
        <source type="image/jpeg" src={fullImage} />
        <img width={width} height={height} itemType="https://schema.org/ImageObject" itemProp="image" style={imageStyle} src={fullImage} alt={alt} loading="lazy" itemProp="image" />
      </picture>
    );
  return null
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage
