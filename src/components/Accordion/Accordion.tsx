import { Divider, Progress } from 'antd'
import cx from 'classnames'
import { FC, ReactNode, useId, useState } from 'react'

import { Button } from '../Button'
import {
  ArrowOutward,
  BriefCaseIcon,
  DownIcon,
  LinkedInIcon,
  LocationIcon,
  MicrosoftIcon,
} from '../Icons'
import {
  COLORS,
  RECENT_VISITORS,
  TIME_SPENT_ON_SECTION_METRICS,
  VISITS,
} from '../../lib/constants'

const Header: FC<{ children?: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={cx(
      className,
      'text-left text-xs font-bold leading-[1.125rem] text-zeedas-text-gray'
    )}
  >
    {children}
  </div>
)

const JobDetails: FC<{ children: ReactNode; text: string | ReactNode }> = ({
  children,
  text,
}) => (
  <div className="mb-1 flex gap-x-3">
    <div className="w-5">{children}</div>
    <span className="text-sm text-zeedas-text-primary">{text}</span>
  </div>
)

const NameAvatar: FC<{ bg: string; color: string; name: string }> = ({
  name,
  bg,
  color,
}) => (
  <div
    className={cx(
      bg,
      color,
      'flex h-10 w-10 items-center justify-center rounded-full text-sm'
    )}
  >
    {name
      .split(' ')
      .map(n => n[0])
      .join('')}
  </div>
)

const TimeSpentSectionMetric: FC<{
  metric: string
  percent: number
  time: string
}> = ({ metric, percent, time }) => (
  <div className=" h-[3rem]">
    <div className="flex items-center justify-between text-sm font-light text-zeedas-text-dark">
      <div>{metric}</div>
      <div className="font-semibold">{time}</div>
    </div>
    <Progress
      percent={percent}
      strokeColor={COLORS.PROGRESS_PURPLE_STROKE}
      trailColor={COLORS.PROGRESS_PURPLE_TRAIL}
      showInfo={false}
      className="m-0"
    />
  </div>
)

const AccordionContent: FC = () => {
  const idPrefix = useId()

  return (
    <div className="flex">
      <div className="w-full">
        <div>
          <JobDetails text="Microsoft">
            <MicrosoftIcon />
          </JobDetails>
          <JobDetails text="Senior Engineering Manager">
            <BriefCaseIcon />
          </JobDetails>
          <JobDetails text="Seattle, WA, United States">
            <LocationIcon />
          </JobDetails>
          <JobDetails
            text={
              <span className="flex items-center gap-x-2 text-sm font-semibold">
                View more on LinkedIn
                <ArrowOutward />
              </span>
            }
          >
            <LinkedInIcon />
          </JobDetails>
        </div>

        <Divider
          type="horizontal"
          orientation="center"
          className="mx-0 my-4 border-zeedas-border-gray"
        />

        <div className=" mb-3 text-xs font-semibold leading-[18px] text-[#101840CC]">
          Colleagues who also viewed your profile
        </div>
        <div className="flex gap-x-3">
          <NameAvatar
            bg="bg-[#1B7AB0]"
            color="text-white"
            name="Frank Donahue"
          />
          <ItemData title="Frank Donahue" subtitle="frank@microsoft.com" />
        </div>
      </div>

      <Divider
        type="vertical"
        orientation="center"
        className="mx-3 h-52 border-zeedas-border-gray"
      />

      <div className="w-full">
        <div className="mb-2 text-xs font-semibold leading-[18px]">Visits</div>
        {VISITS.map(({ id, metric, value }) => {
          return (
            <div key={idPrefix + id}>
              <div className="flex items-center justify-between text-sm">
                <div className="font-light">{metric}</div>
                <div className="font-medium">{value}</div>
              </div>

              <Divider
                type="horizontal"
                orientation="center"
                className="mx-0 my-2 border-zeedas-border-gray"
              />
            </div>
          )
        })}
      </div>

      <Divider
        type="vertical"
        orientation="center"
        className="mx-3 h-52 border-zeedas-border-gray"
      />

      <div className="w-full">
        {TIME_SPENT_ON_SECTION_METRICS.map(metric => (
          <TimeSpentSectionMetric key={idPrefix + metric.id} {...metric} />
        ))}
      </div>
    </div>
  )
}

const ItemData: FC<{ title: string; subtitle: string }> = ({
  subtitle,
  title,
}) => (
  <div>
    <div className="text-sm font-medium text-zeedas-text-primary">{title}</div>
    <div className="text-xs font-light leading-[18px] text-zeedas-text-gray">
      {subtitle}
    </div>
  </div>
)

export const Accordion: FC = () => {
  const idPrefix = useId()
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div>
      <div className="mb-3 flex justify-between overflow-hidden px-4">
        <Header className="min-w-[13.85rem]">Name and email</Header>
        <Header className="min-w-[6rem]">Date</Header>
        <Header className="min-w-[9rem]">Location</Header>
        <Header className="min-w-[3.5rem]">Time spent</Header>
        <div className="min-w-[6rem]" />
      </div>
      {RECENT_VISITORS.map(
        (
          {
            id,
            bg,
            color,
            date,
            device,
            email,
            location,
            name,
            readPercent,
            time,
            timeSpent,
          },
          i
        ) => {
          return (
            <div
              key={idPrefix + id}
              className={cx(
                activeIndex === i &&
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
                  <ItemData
                    title={timeSpent}
                    subtitle={`${readPercent}% read`}
                  />
                </div>
                <div className="flex min-w-[6rem] items-center justify-between">
                  <Progress
                    className="mr-10"
                    type="circle"
                    percent={readPercent}
                    size={26.67}
                    strokeWidth={15}
                    strokeColor={COLORS.PROGRESS_GRAY_STROKE}
                    trailColor={COLORS.PROGRESS_GRAY_TRAIL}
                    showInfo={false}
                  />
                  <Button
                    className="ml-auto px-2 py-3"
                    onClick={() => handleClick(i)}
                  >
                    <DownIcon />
                  </Button>
                </div>
              </div>

              <Divider
                type="horizontal"
                orientation="center"
                className={cx(
                  activeIndex === i || activeIndex - 1 === i
                    ? 'border-zeedas-bg-body'
                    : 'border-zeedas-border-gray',
                  'm-0 transition-all duration-150 ease-in'
                )}
              />

              <div
                className={cx(
                  activeIndex === i && 'opacity-100',
                  'mt-2 px-1 opacity-0 transition-all duration-500 ease-in'
                )}
              >
                <AccordionContent />
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}
