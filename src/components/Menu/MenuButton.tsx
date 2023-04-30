import { FC } from 'react'

import { HeroIcon } from '../Icons'

export const MenuButton: FC = () => {
  return (
    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zeedas-menu-bg-10">
      <HeroIcon height={20} width={20} />
    </div>
  )
}
