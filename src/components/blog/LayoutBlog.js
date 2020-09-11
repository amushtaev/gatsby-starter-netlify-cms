import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Navbar'
import '../all.sass'
import useSiteMetadata from '../SiteMetadata'
import { withPrefix } from 'gatsby'
import Footer from "../Footer";

const TemplateWrapperBlog = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"
          rel="stylesheet" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
};

export default TemplateWrapperBlog