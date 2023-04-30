import { FC } from 'react'
import cx from 'classnames'

import { SkillBadgeProps } from './Badge.interface'

export const SkillBadge: FC<SkillBadgeProps> = ({ className, icon, text }) => {
  return (
    <span
      className={cx(
        className,
        'inline-flex gap-2 rounded-[6.25rem] px-3 py-2 text-sm leading-5 text-white'
      )}
    >
      {icon}
      <span>{text}</span>
    </span>
  )
}
