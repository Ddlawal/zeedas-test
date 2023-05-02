import { Divider } from 'antd'
import { FC, useId, useState } from 'react'
import cx from 'classnames'

import { MetricsTitle } from '.'
import {
  FundamentalsMetricsItemProps,
  FundamentalsMetricsProps,
} from './Metrics.interface'
import { Card } from '../Card'
import { BarChart } from '../Chart'
import { COLORS } from '../../lib/constants'

const FundamentalsMetricsItem: FC<
  FundamentalsMetricsItemProps & { onClick: () => void }
> = ({ icon: Icon, isActive, metric, value, metricUnit, onClick }) => {
  return (
    <button
      className={cx(isActive && 'bg-zeedas-bg-chart', 'w-full')}
      onClick={onClick}
    >
      <div className="my-2 box-border flex h-[23px] w-full items-center justify-between px-6">
        <div className="flex items-center gap-x-3 text-xs">
          <Icon color={isActive ? COLORS.TEXT_BLUE : undefined} />
          <div className={cx(isActive && 'text-zeedas-text-blue')}>
            {metric}
          </div>
        </div>
        <div className="font-medium">
          <span className="text-xs">{value}</span>
          <span className="text-[10px]">{metricUnit}</span>
        </div>
      </div>
      <Divider
        type="horizontal"
        orientation="center"
        className="m-0 border-zeedas-border-gray"
      />
    </button>
  )
}

export const FundamentalsMetrics: FC<FundamentalsMetricsProps> = ({
  data,
  title,
}) => {
  const idPrefix = useId()
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index: number) => setActiveIndex(index)

  return (
    <Card className="mb-5 h-[271px]">
      <div className="flex h-full w-full">
        <div className="w-full">
          <div className="my-4 ml-6">
            <MetricsTitle
              title={title}
              infoText="Figuring out tasks and action points"
            />
          </div>

          <Divider
            type="horizontal"
            orientation="center"
            className="m-0 border-zeedas-border-gray"
          />

          {data.map((metric, i) => (
            <FundamentalsMetricsItem
              key={idPrefix + metric.id}
              {...metric}
              isActive={activeIndex === i}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
        <div className="h-full w-full bg-zeedas-bg-chart">
          <BarChart color={COLORS.TEXT_BLUE} data={data[activeIndex].data} />
        </div>
      </div>
    </Card>
  )
}
