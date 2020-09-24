import React from 'react'
import { Link } from 'gatsby'
import facebookFooter from '../img/social/facebookFooter.svg'
import twitterFooter from '../img/social/twitterFooter.svg'
import instagramFooter from '../img/social/instagramFooter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="">
        <div className="content"  style={{background: `transparent`}}>
          <div className="container">
            <div style={{ borderTop: `solid 4px rgba(255, 255, 255, 0.32)` }} className="columns footer_grid">
              <div className="column" style={{padding: `1.75rem 0`}}>
                <section className="menu">
                  <ul className="menu-list_footer l-copyright">
                    <li><a className="copyright" style={{paddingTop: `7px`}}>© 2020 Softcube</a></li>
                  </ul>
                  <ul className="menu-list_footer">
                    <li>
                      <Link className="navbar_item footer" to="/terms-of-service/">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar_item footer" to="/privacy-policy/">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar_item footer" to="/membership-agreement/">
                        Membership Agreement
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar_item footer" to="/copyright/">
                        Copyright
                      </Link>
                    </li>
                  </ul>
                  <div className="column social_footer">
                    <a title="facebook" href="https://facebook.com/softcube.video/">
                      <img
                        src={facebookFooter}
                        alt="Facebook"
                      />
                    </a>
                    <a title="twitter" href="https://twitter.com/Softcube_video">
                      <img
                        className="fas fa-lg"
                        src={twitterFooter}
                        alt="Twitter"
                      />
                    </a>
                    <a title="instagram" href="https://www.instagram.com/softcube.video/">
                      <img
                        src={instagramFooter}
                        alt="InstagramF"
                      />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
};

export default Footer
