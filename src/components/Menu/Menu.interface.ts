import { NAV_LINKS } from '../../lib/constants'

type MenuItemProps = typeof NAV_LINKS

export interface MenuItemsProps {
  pathName: string
  items: MenuItemProps
}
