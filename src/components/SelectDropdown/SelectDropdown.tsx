import { Dropdown, Space } from 'antd'
import { FC, useId } from 'react'

import { Button } from '../Button'
import { DownIcon } from '../Icons'

const DropdownItems: FC<{
  items: Array<{ id: number; label: string }>
}> = ({ items }) => {
  const idPrefix = useId()

  return (
    <ul className="absolute right-[6px] flex w-40 flex-col gap-3 rounded-[10px] bg-white px-[20px] py-[34px] shadow-zeedas">
      {items.map(({ id, label }) => {
        return (
          <li key={idPrefix + id}>
            <Button className="w-full text-left hover:text-zeedas-text-blue">
              {label}
            </Button>
          </li>
        )
      })}
    </ul>
  )
}

export const SelectDropdown: FC = () => {
  return (
    <Space direction="vertical">
      <Dropdown
        placement="bottomRight"
        trigger={['click']}
        dropdownRender={() => (
          <DropdownItems
            items={[
              { id: 1, label: 'Today' },
              { id: 3, label: 'Last 7 days' },
              { id: 3, label: 'Last 30 days' },
            ]}
          />
        )}
      >
        <Button className="flex items-center gap-x-2 text-sm font-bold text-zeedas-text-secondary">
          Last 30 days <DownIcon />
        </Button>
      </Dropdown>
    </Space>
  )
}
