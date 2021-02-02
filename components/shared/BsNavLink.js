import ActiveLink from 'components/shared/ActiveLink'

const BsNavLink = props => {
  const { href, title, className=''} = props
  return (
    <ActiveLink activeClassName="active" href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </ActiveLink>
  )
}

export default BsNavLink
