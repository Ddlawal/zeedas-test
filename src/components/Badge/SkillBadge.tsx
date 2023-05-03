import { FC } from 'react'
import cx from 'classnames'

import { SkillBadgeProps } from './Badge.interface'
import { useProgressPercent } from '../../lib/hooks/useProgressPercent'

export const SkillBadge: FC<SkillBadgeProps> = ({
  className,
  icon,
  percent,
  text,
  textColor,
}) => {
  const { progressPercent } = useProgressPercent(percent, 5, 50)

  return (
    <span
      className={cx(
        className,
        textColor || 'text-white',
        'inline-flex gap-2 rounded-[6.25rem] px-3 py-2 text-sm leading-5'
      )}
    >
      {icon}
      <div className="flex">
        {text} <div className="min-w-[20px] text-right">{progressPercent}</div>%
      </div>
    </span>
  )
}
