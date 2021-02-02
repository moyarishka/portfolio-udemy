import React, { useState } from 'react'
import Link from 'next/link'
import { isAuthorized } from 'utils/auth0'
import ReactResizeDetector from 'react-resize-detector'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  NavItem
} from 'reactstrap'
import DropDownItem from 'components/shared/DropDownItem'
import NewNavItem from 'components/shared/NavItem'

const BsNavBrand = () =>
  <Link href="/">
    <a className="navbar-brand port-navbar-brand">Maryna</a>
  </Link>

const SimpleLink = ({ className, href, title }) =>
  <a className={className} href={href}>{title}</a>

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const adminMenuItems = [
    {
      className: "port-dropdown-item",
      href: "/portfolios/new",
      title: "Create Portfolio",
    },
    {
      className: "port-dropdown-item",
      href: "/blogs/editor",
      title: "Blog Editor",
    },
    {
      className: "port-dropdown-item",
      href: "/dashboard",
      title: "Dashboard",
    },
  ]

  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle className="port-dropdown-toggle" nav caret>
          Admin
      </DropdownToggle>
      <DropdownMenu right>
        {adminMenuItems.map(item =>
          <DropDownItem
            className={item.className}
            href={item.href}
            title={item.title} />
        )}
      </DropdownMenu>
    </Dropdown>
  )
}

const Header = ({user, loading, className}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const navItems = [
    {
      className: "port-navbar-item",
      href: "/",
      title: "Home",
    },
    {
      className: "port-navbar-item",
      href: "/about",
      title: "About",
    },
    {
      className: "port-navbar-item",
      href: "/portfolios",
      title: "Portfolios",
    },
    {
      className: "port-navbar-item",
      href: "/blogs",
      title: "Blogs",
    },
    {
      className: "port-navbar-item",
      href: "/cv",
      title: "Cv",
    },
  ]

  return (
    <ReactResizeDetector handleWidth>
      {({width}) =>
        <Navbar
          className={`port-navbar port-default absolute ${className} ${width < 768 && isOpen ? 'is-open' : 'is-close'}`}
          dark
          expand="md">
          <BsNavBrand />
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {navItems.map(item =>
                <NewNavItem
                  className={item.className}
                  href={item.href}
                  title={item.title} />
              )}
            </Nav>
            <Nav navbar>
              { !loading &&
                <>
                  { user &&
                    <>
                      { isAuthorized(user, 'admin') && <AdminMenu />}
                      <NavItem className="port-navbar-item">
                        <SimpleLink className="nav-link port-navbar-link" href="/api/v1/logout" title="Logout" />
                      </NavItem>
                    </>
                  }
                  { !user &&
                    <NavItem className="port-navbar-item">
                      <SimpleLink className="nav-link port-navbar-link" href="/api/v1/login" title="Login" />
                    </NavItem>
                  }
                </>
              }
            </Nav>
          </Collapse>
        </Navbar>
      }
    </ReactResizeDetector>
  )
}

export default Header
