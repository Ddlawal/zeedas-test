import { FC } from 'react'
import cx from 'classnames'

import { SkillBadgeProps } from './Badge.interface'

export const SkillBadge: FC<SkillBadgeProps> = ({
  className,
  icon,
  text,
  textColor,
}) => {
  return (
    <span
      className={cx(
        className,
        textColor || 'text-white',
        'inline-flex gap-2 rounded-[6.25rem] px-3 py-2 text-sm leading-5'
      )}
    >
      {icon}
      <span>{text}</span>
    </span>
  )
}
