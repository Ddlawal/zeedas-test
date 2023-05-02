import { FC } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import { NavLinkProps } from './NavLink.interface'

export const NavLink: FC<NavLinkProps> = ({
  className,
  icon: Icon = 'i',
  iconProps,
  label,
  to,
  ...rest
}) => {
  return (
    <Link
      to={to}
      className={cx(
        'flex items-center gap-3 transition-all hover:bg-zeedas-bg-chart hover:font-medium',
        className
      )}
      {...rest}
    >
      <Icon {...iconProps} />
      {label}
    </Link>
  )
}
