import { Divider, Progress } from 'antd'
import { FC, ReactNode, useId } from 'react'

import { NameAvatar } from '.'
import {
  COLORS,
  TIME_SPENT_ON_SECTION_METRICS,
  VISITS,
} from '../../lib/constants'
import {
  ArrowOutward,
  BriefCaseIcon,
  LinkedInIcon,
  LocationIcon,
  MicrosoftIcon,
} from '../Icons'

export const ItemData: FC<{ title: string; subtitle: string }> = ({
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

const JobDetails: FC<{ children: ReactNode; text: string | ReactNode }> = ({
  children,
  text,
}) => (
  <div className="mb-1 flex gap-x-3">
    <div className="w-5">{children}</div>
    <span className="text-sm text-zeedas-text-primary">{text}</span>
  </div>
)

const TimeSpentSectionMetric: FC<{
  metric: string
  percent: number
  time: string
}> = ({ metric, percent, time }) => (
  <div className=" h-[2.5rem]">
    <div className="flex items-center justify-between text-sm font-light text-zeedas-text-dark">
      <div>{metric}</div>
      <div className="text-xs font-medium leading-[18px]">{time}</div>
    </div>
    <Progress
      rootClassName="-top-[7px]"
      percent={percent}
      strokeColor={COLORS.PROGRESS_PURPLE_STROKE}
      trailColor={COLORS.PROGRESS_PURPLE_TRAIL}
      showInfo={false}
      className="m-0"
      strokeWidth={5}
    />
  </div>
)

export const AccordionContent: FC = () => {
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
        <div className="mb-2 text-xs font-medium leading-[18px]">
          Time spent on sections
        </div>
        {TIME_SPENT_ON_SECTION_METRICS.map(metric => (
          <TimeSpentSectionMetric key={idPrefix + metric.id} {...metric} />
        ))}
      </div>
    </div>
  )
}
