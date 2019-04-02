import React from 'react'
import Logo from './logo.png'
import './styles.scss'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      fixed: false,
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 50) {
          this.setState({
            fixed: true,
          })
        } else {
          this.setState({
            fixed: false,
          })
        }
      })
      window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && this.state.isOpen === true) {
          this.setState({
            isOpen: false,
          })
        }
      })
    }
  }

  render() {
    const { fixed, isOpen } = this.state
    return (
      <div className={`top-menu ${fixed ? 'fixed' : ''}`}>
        <div className="container">
          <Navbar expand="lg">
            <NavbarBrand href="/">
              <img src={Logo} alt="logo" />
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggle}
              className={`navbar-toggler-right ${isOpen ? '' : 'collapsed'}`}
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink target="_blank" href="https://github.com/rbire">Github</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#uses">Use Cases</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink target="_blank "href="https://github.com/orgs/rbire/people">Team</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}
