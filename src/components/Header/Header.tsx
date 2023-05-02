import { FC } from 'react'
import cx from 'classnames'
import { HeaderProps } from './Header.interface'
import { Logo } from '../Icons'
import { Menu } from '../Menu'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'

export const Header: FC<HeaderProps> = ({ showHeaderBorder }) => {
  const navigator = useNavigate()
  return (
    <div
      className={cx(
        'fixed right-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-zeedas-bg-body px-20',
        showHeaderBorder &&
          '-z-0 border-b-[1px] border-zeedas-border-gray border-opacity-70'
      )}
    >
      <Button onClick={() => navigator('/')}>
        <Logo />
      </Button>
      <Menu />
    </div>
  )
}
