import { Dropdown, Space } from 'antd'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { MenuButton } from './MenuButton'
import { MenuItems } from './MenuItems'
import { NAV_LINKS } from '../../lib/constants'
import { Button } from '../Button'

export const Menu: FC = () => {
  const location = useLocation()
  const pathName = location.pathname

  return (
    <Space direction="vertical">
      <Dropdown
        placement="bottomRight"
        trigger={['click']}
        dropdownRender={() => (
          <MenuItems items={NAV_LINKS} pathName={pathName} />
        )}
      >
        <Button>
          <MenuButton />
        </Button>
      </Dropdown>
    </Space>
  )
}
