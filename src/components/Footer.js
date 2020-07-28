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
              <div className="column" style={{padding: `38px 0px`}}>
                <section className="menu">
                  <ul className="menu-list_footer">
                    <li><a className="copyright" style={{paddingTop: `7px`}}>© 2020 Softcube</a></li>
                    <li>
                      <Link to="/" className="navbar-item footer">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item footer" to="#">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item footer" to="#">
                        Membership Agreement
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item footer" to="#">
                        Copyright
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column social_footer">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebookFooter}
                    alt="Facebook"
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitterFooter}
                    alt="Twitter"
                  />
                </a>
                <a title="instagram" href="https://linkedin.com">
                  <img
                    src={instagramFooter}
                    alt="InstagramF"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
};

export default Footer
