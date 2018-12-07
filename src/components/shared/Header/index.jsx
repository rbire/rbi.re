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
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">FAQ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Team</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}
