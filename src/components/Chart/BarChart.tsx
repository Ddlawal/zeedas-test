import { ResponsiveBar } from '@nivo/bar'
import cx from 'classnames'
import { FC } from 'react'

export const BarChart: FC<{
  data: any
  color: string
  className?: string
}> = ({ className, color, data }) => {
  return (
    <div className={cx(className, 'h-full w-full')}>
      <ResponsiveBar
        data={data}
        keys={['value']}
        indexBy="date"
        margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={color}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          legendPosition: 'middle',
        }}
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#696F8C"
        legends={[]}
        role="application"
      />
    </div>
  )
}
