import { FC, ReactNode } from 'react'
import { Header } from '../components/Header'
import { HeaderProps } from '../components/Header/Header.interface'

export const PrimaryLayout: FC<
  Partial<HeaderProps> & { children: ReactNode; className?: string }
> = ({ children, className, showHeaderBorder = false }) => {
  return (
    <div className={className}>
      <Header showHeaderBorder={showHeaderBorder} />
      <div className="pt-[80px]">{children}</div>
    </div>
  )
}
