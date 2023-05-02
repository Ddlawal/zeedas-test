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
    chartData: any
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

export interface BarchartDataI {
  date: string
  value: number
}

export interface FundamentalsMetricsProps {
  title: string
  data: Array<FundamentalsMetricsItemProps>
}

export interface FundamentalsMetricsItemProps {
  id: number
  icon: FC<IconProps>
  metric: string
  value: number
  metricUnit?: string
  isActive?: boolean
  data?: Array<BarchartDataI>
}
