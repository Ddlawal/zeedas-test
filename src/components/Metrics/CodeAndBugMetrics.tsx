import { Divider } from 'antd'
import { FC } from 'react'

import { Metric, MetricBody, MetricsTitle } from '.'
import { Card } from '../Card'
import { CHART_DATA1, COLORS } from '../../lib/constants'

export const CodeAndBugMetrics: FC = () => {
  return (
    <Card className="mb-5 flex px-6 py-5">
      <Metric
        badgeColor="green"
        badgeText="87%"
        metricUnit="%"
        metricValue={65}
        title="Code efficiency"
        infoText="The efficiency of my code"
        chartId="Code"
        chartData={CHART_DATA1}
        chartColor={COLORS.GREEN}
      />
      <Divider
        type="vertical"
        orientation="center"
        className="mx-6 h-20 border-zeedas-border-gray"
      />
      <div className="w-full">
        <MetricsTitle
          title="Bug introduction"
          infoText="How often I get bugs in my code"
        />
        <div className="mt-1 flex w-full items-center">
          <div className="w-full">
            <MetricBody
              badgeColor="orange"
              badgeText="18%"
              metricUnit=""
              metricText="bugs/PR"
              metricValue={19}
              className="items-center"
            />
          </div>
          <Divider
            type="vertical"
            orientation="center"
            className="mx-6 h-20 border-zeedas-border-gray"
          />
          <div className="w-full">
            <MetricBody
              badgeColor="orange"
              badgeText="18%"
              metricUnit="%"
              metricValue={23}
              metricText="bug frequency"
              className="items-center"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
