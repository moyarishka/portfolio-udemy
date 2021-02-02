import BsNavLink from 'components/shared/BsNavLink'
import { NavItem } from 'reactstrap'

const NewNavItem = ({ className, href, title }) =>
  <NavItem className={className}>
    <BsNavLink href={href} title={title}/>
  </NavItem>

export default NewNavItem
