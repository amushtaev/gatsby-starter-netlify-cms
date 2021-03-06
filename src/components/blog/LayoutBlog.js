import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Navbar'
import '../all.sass'
import useSiteMetadata from '../SiteMetadata'
import { withPrefix } from 'gatsby'
import Footer from "../Footer";
import Analytics from "../Analitics";

const TemplateWrapperBlog = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.com.ua" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.google.com.ua" />
        <link rel="dns-prefetch" href="https://www.google.com" />

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
        <meta name="google-site-verification" content="lTplUruFH61DAfPI6hQ8Z18epNymLnv6GqYsgTrtkJU" />
      </Helmet>
      <Analytics />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
};

export default TemplateWrapperBlog
