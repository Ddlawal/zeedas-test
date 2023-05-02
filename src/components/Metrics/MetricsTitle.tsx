import { Popover } from 'antd'
import { FC } from 'react'

import { MetricsTitleProps } from './Metrics.interface'
import { InfoIcon } from '../Icons'

export const MetricsTitle: FC<MetricsTitleProps> = ({ title, infoText }) => {
  return (
    <div className="flex items-center gap-x-[9.33px]">
      <span className="text-sm font-medium text-zeedas-text-gray">{title}</span>{' '}
      <Popover placement="bottomLeft" content={infoText}>
        <InfoIcon />
      </Popover>
    </div>
  )
}
