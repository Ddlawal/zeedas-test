import { Divider, Spin } from 'antd'
import cx from 'classnames'
import { FC, useState } from 'react'

import { Accordion } from '../../components/Accordion'
import { RecentVisitorsI } from '../../components/Accordion/Accordion.interface'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Metric } from '../../components/Metrics'
import { SelectDropdown } from '../../components/SelectDropdown'
import { PrimaryLayout } from '../../layout/PrimaryLayout'
import { CHART_DATA1, COLORS, RECENT_VISITORS } from '../../lib/constants'

const Title: FC<{ title: string }> = ({ title }) => (
  <div className="text-base font-semibold leading-5 text-zeedas-text-primary">
    {title}
  </div>
)

export const ViewerStats: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState<Array<RecentVisitorsI>>(RECENT_VISITORS)

  const handleClick = () => {
    setIsLoading(true)

    setTimeout(() => {
      setItems(prev => {
        return [...prev, ...RECENT_VISITORS]
      })

      setIsLoading(false)
    }, 1000)
  }

  return (
    <PrimaryLayout
      showHeaderBorder={true}
      className="mx-auto mb-20 w-[50.875rem] px-10 md:px-0"
    >
      <div className="mb-6 mt-10 flex justify-between">
        <div className="text-2xl font-medium leading-7 text-zeedas-text-primary">
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
          infoText="Lorem ipsum"
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
          infoText="Lorem ipsum"
          chartId="Time-spent"
          chartData={CHART_DATA1}
          chartColor={COLORS.ORANGE}
        />
      </Card>

      <Card className="px-2 py-6">
        <div className="mb-6 px-4 text-base font-semibold leading-5 text-zeedas-text-primary">
          Recent visitors
        </div>
        <Accordion items={items} />
        <div className="flex items-center">
          <Button
            className={cx(
              isLoading && 'hidden',
              'ml-4 flex-none text-sm leading-6 text-zeedas-btn-primary transition-all hover:font-medium'
            )}
            onClick={handleClick}
          >
            Show more
          </Button>
          <div
            className={cx(
              isLoading ? 'opacity-100' : 'opacity-0',
              'flex flex-auto items-center justify-center transition-all duration-300 ease-out'
            )}
          >
            <Spin />
          </div>
        </div>
      </Card>
    </PrimaryLayout>
  )
}
