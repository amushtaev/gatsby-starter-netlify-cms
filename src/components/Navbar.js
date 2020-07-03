import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            <Link to="/" className="navbar-item" title="Logo Softcube">
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
              <Link onClick={() => this.toggleHamburger()} className="navbar-item white" to="/industries">
                Industries
              </Link>
              <Link onClick={() => this.toggleHamburger()} className="navbar-item white" to="/pricing">
                Pricing
              </Link>
              <Link onClick={() => this.toggleHamburger()} className="navbar-item white" to="/blog">
                Blog
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <Link onClick={() => this.toggleHamburger()} className="navbar-item white" to="https://app.softcube.com">
                Sign In
              </Link>
              <Link className="navbar-item color--yellow" to="https://app.softcube.com">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
