import { FC } from 'react'
import { LinkProps, To } from 'react-router-dom'

import { IconProps } from '../Icons/icons.interface'

export type NavLinkProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    className?: string
    icon?: FC<IconProps>
    iconProps?: IconProps
    label: string
    to: To
  }
