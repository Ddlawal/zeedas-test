import { FC, ReactNode } from 'react'
import cx from 'classnames'

export const Card: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cx(
        className,
        'rounded-lg border-[1px] border-zeedas-border-gray border-opacity-50 bg-white'
      )}
    >
      {children}
    </div>
  )
}
