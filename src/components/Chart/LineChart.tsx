import { ResponsiveLine } from '@nivo/line'
import cx from 'classnames'
import { FC } from 'react'

export const LineChart: FC<{
  data: any
  color: string
  className?: string
}> = ({ className, color, data }) => {
  return (
    <div className={cx(className, 'h-14 w-40')}>
      <ResponsiveLine
        data={data}
        margin={{ top: 0, right: 5, bottom: 0, left: 10 }}
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        isInteractive={false}
        legends={[]}
        colors={color}
        animate={true}
      />
    </div>
  )
}
