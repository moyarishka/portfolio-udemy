import BsNavLink from 'components/shared/BsNavLink'
import { DropdownItem } from 'reactstrap'

const DropDownItem = ({ className, href, title }) =>
  <DropdownItem>
    <BsNavLink
      className={className}
      href={href}
      title={title}
    />
  </DropdownItem>

export default DropDownItem
