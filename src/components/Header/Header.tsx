import { FC } from 'react'
import cx from 'classnames'
import { HeaderProps } from './Header.interface'
import { Logo } from '../Icons'
import { Menu } from '../Menu'

export const Header: FC<HeaderProps> = ({ showHeaderBorder }) => {
  return (
    <div
      className={cx(
        'fixed right-0 top-0 flex h-20 w-full items-center justify-between px-20',
        showHeaderBorder && '-z-0 border-b-[1px]'
      )}
    >
      <Logo />
      <Menu />
    </div>
  )
}
