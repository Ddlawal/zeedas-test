import { FC } from 'react'
import cx from 'classnames'

import { MetricsTitle } from '.'
import { MetricsProps, MetricsBodyProps } from './Metrics.interface'
import { Badge } from '../Badge'
import { LineChart } from '../Chart'

export const MetricBody: FC<MetricsBodyProps> = ({
  className,
  children,
  badgeColor,
  badgeText,
  metricUnit,
  metricValue,
  metricText,
}) => {
  return (
    <div className={cx(className, 'flex justify-between')}>
      <div className="mt-1 flex flex-col items-start gap-y-2">
        <div>
          <span className="text-[1.25rem] font-semibold leading-7 text-zeedas-text-primary">
            {metricValue}
          </span>
          <span className="text-[0.625rem] leading-[0.8525rem] text-zeedas-text-gray">
            {metricUnit}
          </span>
          <span className="text-[1rem] text-zeedas-text-primary">
            {' '}
            {metricText}
          </span>
        </div>
        <Badge color={badgeColor} text={badgeText} />
      </div>
      {children}
    </div>
  )
}

export const Metric: FC<MetricsProps> = ({
  badgeColor,
  badgeText,
  chartColor,
  chartData,
  chartId,
  infoText,
  metricUnit,
  metricValue,
  title,
  className,
  chartClassName,
  metricText,
}) => {
  return (
    <div className="w-full">
      <MetricsTitle title={title} infoText={infoText} />
      <MetricBody
        badgeColor={badgeColor}
        badgeText={badgeText}
        metricUnit={metricUnit}
        metricValue={metricValue}
        className={className}
        metricText={metricText}
      >
        <LineChart
          data={[
            {
              id: chartId,
              data: chartData,
            },
          ]}
          color={chartColor}
          className={chartClassName}
        />
      </MetricBody>
    </div>
  )
}
