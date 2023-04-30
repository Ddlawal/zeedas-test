import { FC } from 'react'
import { To } from 'react-router-dom'

import { IconProps } from '../Icons/icons.interface'

export interface NavLinkProps {
  className?: string
  icon?: FC<IconProps>
  iconProps?: IconProps
  label: string
  to: To
}
