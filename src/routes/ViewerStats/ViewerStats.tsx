import { Divider } from 'antd'
import { FC } from 'react'

import { Accordion } from '../../components/Accordion'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Metric } from '../../components/Metrics'
import { SelectDropdown } from '../../components/SelectDropdown'
import { PrimaryLayout } from '../../layout/PrimaryLayout'
import { CHART_DATA1, COLORS } from '../../lib/constants'

const Title: FC<{ title: string }> = ({ title }) => (
  <div className="text-base font-semibold leading-5 text-zeedas-text-primary">
    {title}
  </div>
)

export const ViewerStats: FC = () => {
  return (
    <PrimaryLayout showHeaderBorder={true} className="mb-20 px-[19.5625rem]">
      <div className="mb-6 mt-10 flex justify-between">
        <div className="text-2xl font-semibold leading-7 text-zeedas-text-primary">
          Profile analytics
        </div>
        <SelectDropdown
          options={[
            { id: 1, label: 'Today' },
            { id: 3, label: 'Last 7 days' },
            { id: 3, label: 'Last 30 days' },
          ]}
        />
      </div>

      <Card className="mb-5 flex px-6 py-5">
        <Metric
          badgeColor="green"
          badgeText="87%"
          metricValue={732}
          title={<Title title="Profile visits" />}
          chartId="Profile-visits"
          chartData={CHART_DATA1}
          chartColor={COLORS.GREEN}
        />

        <Divider
          type="vertical"
          orientation="center"
          className="mx-6 h-20 border-zeedas-border-gray"
        />

        <Metric
          badgeColor="orange"
          badgeText="27%"
          metricValue={328}
          title={<Title title="Time spent (hrs)" />}
          chartId="Time-spent"
          chartData={CHART_DATA1}
          chartColor={COLORS.ORANGE}
        />
      </Card>

      <Card className="px-2 py-6">
        <div className="mb-6 px-4 text-base font-semibold leading-5 text-zeedas-text-primary">
          Recent visitors
        </div>
        <Accordion />
        <Button className="ml-4 text-sm leading-6 text-zeedas-btn-primary">
          Show more
        </Button>
      </Card>
    </PrimaryLayout>
  )
}
