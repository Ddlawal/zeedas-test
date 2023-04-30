import { FC } from 'react'
import cx from 'classnames'

import { BadgeProps } from './Badge.interface'
import { ArrowDownIcon, ArrowUpIcon } from '../Icons'

export const Badge: FC<BadgeProps> = ({ className, color, text }) => {
  return (
    <span
      className={cx(
        className,
        'inline-flex h-[1.33rem] items-center gap-1 rounded-md bg-opacity-10 px-[0.625rem] py-2 text-[0.625rem] leading-6',
        color === 'green' && 'bg-zeedas-green text-zeedas-green',
        color === 'orange' && 'bg-zeedas-orange text-zeedas-orange'
      )}
    >
      {color === 'green' && <ArrowUpIcon />}
      {color === 'orange' && <ArrowDownIcon />}
      <span>{text}</span>
    </span>
  )
}
