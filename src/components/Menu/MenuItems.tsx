import { FC, useId } from 'react'
import cx from 'classnames'

import { MenuItemsProps } from './Menu.interface'
import { NavLink } from '../NavLink'
import { COLORS } from '../../lib/constants'

export const MenuItems: FC<MenuItemsProps> = ({ pathName, items }) => {
  return (
    <ul className="absolute right-[6px] flex min-h-[184px] w-[172px] flex-col gap-3 rounded-[10px] bg-white px-[20px] py-[34px] shadow-zeedas">
      {items.map(({ icon, label, to }) => {
        const id = useId()

        return (
          <li key={id}>
            <NavLink
              to={to}
              label={label}
              icon={icon as FC}
              iconProps={{
                color: pathName === to ? COLORS.TEXT_BLUE : undefined,
              }}
              className={cx(pathName === to && 'text-zeedas-text-blue')}
            />
          </li>
        )
      })}
    </ul>
  )
}