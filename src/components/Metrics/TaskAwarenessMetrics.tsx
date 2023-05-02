import { Divider, Progress } from 'antd'
import { FC } from 'react'

import { Metric, MetricsTitle } from '.'
import { Card } from '../Card'
import { CHART_DATA1, COLORS } from '../../lib/constants'
import { useProgressPercent } from '../../lib/hooks/useProgressPercent'

export const TaskAwarenessMetrics: FC = () => {
  const { progressPercent } = useProgressPercent(80)

  return (
    <Card className="mb-5 flex items-center px-6 py-5">
      <div className="w-full">
        <MetricsTitle
          title="Task awareness"
          infoText="Figuring out tasks and action points"
        />
        <div className="mt-[14px] flex items-center justify-between text-sm text-zeedas-text-dark">
          <div>Here’s the name of the test</div>
          <div className="font-semibold">259 pts (80%)</div>
        </div>
        <Progress
          percent={progressPercent}
          strokeColor={COLORS.PROGRESS_BLUE_STROKE}
          trailColor={COLORS.PROGRESS_BLUE_TRAIL}
          showInfo={false}
        />
      </div>

      <Divider
        type="vertical"
        orientation="center"
        className="mx-6 h-20 border-zeedas-border-gray"
      />

      <div className="flex w-full">
        <Metric
          badgeColor="orange"
          badgeText="18%"
          metricUnit="%"
          metricValue={57}
          className="items-center"
          title="Pickup speed"
          infoText="Speed of picking up where I left off"
          chartId="Pickup"
          chartData={CHART_DATA1}
          chartColor={COLORS.ORANGE}
          chartClassName="h-8 w-[6.25rem]"
        />

        <Divider
          type="vertical"
          orientation="center"
          className="mx-6 h-20 border-zeedas-border-gray"
        />

        <Metric
          badgeColor="green"
          badgeText="50%"
          metricUnit="%"
          metricValue={74}
          className="items-center"
          title="Work rate"
          infoText="A measure of my work rate"
          chartId="Work"
          chartData={CHART_DATA1}
          chartColor={COLORS.GREEN}
          chartClassName="h-8 w-[6.25rem]"
        />
      </div>
    </Card>
  )
}
