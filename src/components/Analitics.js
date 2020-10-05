import React from 'react'

const Analytics = () => {

  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-959364440"
      />
      <script>{InjectGA()}</script>
      <img style={{display: 'none'}} src="https://www.facebook.com/tr?id=417379408707861&amp;ev=PageView&amp;noscript=1"/>
    </>
  )
}

export default Analytics

const InjectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'AW-959364440');
};

