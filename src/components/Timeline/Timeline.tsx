import { Timeline as AntDTimeline } from 'antd'
import cx from 'classnames'
import { FC } from 'react'

import { ClockIcon } from '../Icons'
import { TIMELINE_ITEMS } from '../../lib/constants'

const Caption: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div className="mb-2 mt-4">
    <div className="text-base font-medium text-zeedas-text-primary">
      {title}
    </div>
    <div className="text-sm text-zeedas-text-secondary">{subtitle}</div>
  </div>
)

const items = TIMELINE_ITEMS.map(
  ({
    badgeColor,
    badgeText,
    badgeTextColor,
    captionSubtext,
    captionText,
    date,
    icon: Icon,
    iconColor,
    imageSrc,
  }) => ({
    children: (
      <div className="ml-28">
        <div
          className={cx(
            badgeColor,
            'mb-2 inline-flex items-center gap-x-2.5 rounded-[6.25rem] px-2.5 py-1'
          )}
        >
          <Icon color={iconColor} />
          <div className={cx(badgeTextColor, 'font-bold')}>{badgeText}</div>
        </div>
        <img src={imageSrc} alt="dashboard" height={240} />
        <Caption title={captionText} subtitle={captionSubtext} />
      </div>
    ),
    dot: (
      <div className="flex items-end gap-x-4 pl-28">
        <div className="text-left text-sm font-extrabold leading-4 text-zeedas-timeline-label">
          {date}
        </div>
        <ClockIcon />
      </div>
    ),
  })
)

export const Timeline: FC = () => {
  return (
    <div className="mt-10">
      <AntDTimeline mode="left" items={items} />
    </div>
  )
}
