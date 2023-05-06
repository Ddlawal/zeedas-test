import { BarDatum } from '@nivo/bar'
import { Datum } from '@nivo/line'
import { FC, ReactNode } from 'react'

import { BadgeColorI } from '../Badge/Badge.interface'
import { IconProps } from '../Icons/icons.interface'

export interface MetricsBodyProps {
  className?: string
  children?: ReactNode
  badgeColor: BadgeColorI
  badgeText: string
  metricValue: number
  metricUnit?: string
  metricText?: string
}

export interface MetricsTitleProps {
  title: ReactNode
  infoText?: ReactNode
}

export type MetricsProps = MetricsBodyProps &
  MetricsTitleProps & {
    chartData: Array<BarDatum | Datum>
    chartColor: string
    chartId: string
    chartClassName?: string
  }

export interface AssessmentProps {
  id?: number
  title: string
  score: number
  percent: number
  percentile: number
}

export interface FundamentalsMetricsProps {
  title: string
  data: Array<FundamentalsMetricsItemProps>
  infoText: string
}

export interface FundamentalsMetricsItemProps {
  id: number
  icon: FC<IconProps>
  metric: string
  value: number
  data: Array<BarDatum>
  metricUnit?: string
  isActive?: boolean
}
