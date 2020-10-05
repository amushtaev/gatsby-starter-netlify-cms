import React, {useState} from "react";
import {TryAiButton, WrapperCookies} from "../components/pricing/styledComponents";
import Cookies from 'universal-cookie';
import {Link} from "gatsby";

export default function ScCookie() {
    const cookies = new Cookies();
    const [display, setDisplay] = useState('flex');

    return (
      <>
      {!cookies.get('SCSESSID') ?
        <WrapperCookies display={display}>
          <div id="Cookies" style={{marginRight: "20px"}}>This site uses cookies to improve your user experience
            <Link to={'/privacy-policy/'} style={{paddingLeft: "20px"}} >Read More</Link>
          </div>
          <TryAiButton onClick={() => {
            cookies.set('SCSESSID', 'true', { path: '/' });
            setDisplay('none')
          }} text={'Accept'} />
        </WrapperCookies>
      : ""
      }
      </>
    );
}

