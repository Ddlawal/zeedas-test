import { FC, useId } from 'react'
import cx from 'classnames'

import { RaisingProgressProps } from './RaisingProgress.interface'
import { RAISING_PROGRESS_SIZE } from '../../lib/constants'

export const RaisingProgress: FC<RaisingProgressProps> = ({
  className,
  percent,
  strokeColor,
  trailColor,
}) => {
  const idPrefix = useId()

  return (
    <div className={cx(className, 'flex items-end gap-x-[1px]')}>
      {RAISING_PROGRESS_SIZE.map(([id, width, height, size]) => {
        return (
          <div
            key={idPrefix + id}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: percent > size ? strokeColor : trailColor,
            }}
          />
        )
      })}
    </div>
  )
}
