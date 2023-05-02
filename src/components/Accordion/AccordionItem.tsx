import { Divider, Progress } from 'antd'
import { FC } from 'react'
import cx from 'classnames'

import { AccordionContent, ItemData, NameAvatar } from '.'
import { AccordionItemProps } from './Accordion.interface'
import { Button } from '../Button'
import { DownIcon } from '../Icons'
import { COLORS } from '../../lib/constants'
import { useProgressPercent } from '../../lib/hooks/useProgressPercent'

export const AccordionItem: FC<AccordionItemProps> = ({
  activeIndex,
  bg,
  color,
  date,
  device,
  email,
  index,
  location,
  name,
  readPercent,
  time,
  timeSpent,
  onClick,
}) => {
  const { progressPercent } = useProgressPercent(readPercent)

  return (
    <div
      className={cx(
        activeIndex === index &&
          '-mt-4 h-[24rem] rounded-lg border border-zeedas-border-gray bg-zeedas-bg-body pt-4',
        'mb-3 h-14 overflow-hidden px-4 transition-all duration-500 ease-in-out'
      )}
    >
      <div className="mb-3 flex justify-between">
        <div className="flex min-w-[14rem] gap-x-3">
          <NameAvatar bg={bg} color={color} name={name} />

          <ItemData title={name} subtitle={email} />
        </div>
        <div className="min-w-[6rem]">
          <ItemData title={date} subtitle={time} />
        </div>
        <div className="min-w-[9rem]">
          <ItemData title={location} subtitle={device} />
        </div>
        <div className="min-w-[3.5rem]">
          <ItemData title={timeSpent} subtitle={`${readPercent}% read`} />
        </div>
        <div className="flex min-w-[6rem] items-center justify-between">
          <Progress
            className="mr-10"
            type="circle"
            percent={progressPercent}
            size={26.67}
            strokeWidth={15}
            strokeColor={COLORS.PROGRESS_GRAY_STROKE}
            trailColor={COLORS.PROGRESS_GRAY_TRAIL}
            showInfo={false}
          />
          <Button
            className={cx(
              activeIndex === index && '-rotate-180',
              'ml-auto px-2 py-3 transition-all duration-500'
            )}
            onClick={() => onClick(index)}
          >
            <DownIcon />
          </Button>
        </div>
      </div>

      <Divider
        type="horizontal"
        orientation="center"
        className={cx(
          activeIndex === index || activeIndex - 1 === index
            ? 'border-zeedas-bg-body'
            : 'border-zeedas-border-gray',
          'm-0 transition-all duration-150 ease-in'
        )}
      />

      <div
        className={cx(
          activeIndex === index && 'opacity-100',
          'mt-2 px-1 opacity-0 transition-all duration-500 ease-in'
        )}
      >
        <AccordionContent />
      </div>
    </div>
  )
}
