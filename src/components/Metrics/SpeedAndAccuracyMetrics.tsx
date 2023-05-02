import { Divider } from 'antd'
import { FC } from 'react'

import { Metric } from '.'
import { Card } from '../Card'
import { CHART_DATA1, COLORS } from '../../lib/constants'

export const SpeedAndAccuracyMetrics: FC = () => {
  return (
    <Card className="mb-5 flex px-6 py-5">
      <Metric
        badgeColor="green"
        badgeText="87%"
        metricUnit="c/hr"
        metricValue={2.8}
        title="Speed"
        infoText="Working speed"
        chartId="Speed"
        chartData={CHART_DATA1}
        chartColor={COLORS.GREEN}
      />

      <Divider
        type="vertical"
        orientation="center"
        className="mx-6 h-20 border-zeedas-border-gray"
      />

      <Metric
        badgeColor="green"
        badgeText="79%"
        metricUnit="%"
        metricValue={89}
        title="Accuracy"
        infoText="Working accuracy"
        chartId="Accuracy"
        chartData={CHART_DATA1}
        chartColor={COLORS.GREEN}
      />
    </Card>
  )
}
