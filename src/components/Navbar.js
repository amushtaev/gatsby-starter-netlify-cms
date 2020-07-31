import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
    this.pageState = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container header">
          <div className="navbar-brand">
            <Link to="/" className="navbar_item logo" title="Logo Softcube">
              <img src={logo} alt="Softcube" className="logo"/>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar_item" to="/industries">
                Industries
              </Link>
              <Link className="navbar_item" to="/pricing">
                Pricing
              </Link>
              <Link className="navbar_item" to="/blog">
                Blog
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <Link className="navbar_item" to="https://app.softcube.com">
                Sign In
              </Link>
              <Link className="navbar_item color--yellow" to="https://app.softcube.com">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar
