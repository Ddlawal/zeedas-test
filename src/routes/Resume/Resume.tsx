import { FC, useId } from 'react'

import {
  CodeAndBugMetrics,
  CodingAssessments,
  FundamentalsMetrics,
  SpeedAndAccuracyMetrics,
  TaskAwarenessMetrics,
} from '../../components/Metrics'
import { UserInfo } from '../../components/UserInfo'
import { PrimaryLayout } from '../../layout/PrimaryLayout'
import { FUNDAMENTALS_DATA } from '../../lib/constants'

export const Resume: FC = () => {
  const idPrefix = useId()

  return (
    <PrimaryLayout
      showHeaderBorder={true}
      className="mx-auto mb-20 w-[51rem] px-10 lg:w-full lg:px-20"
    >
      <div className="mx-auto mt-6 w-full lg:flex lg:gap-x-20">
        <div className="lg:max-w-[24.5rem] ">
          <UserInfo avatarSize={80} showRank />
        </div>
        <div className="w-[50rem] lg:w-full">
          <div className="mb-5 text-[1.125rem] font-extrabold text-zeedas-text-primary">
            Metrics
          </div>
          <SpeedAndAccuracyMetrics />
          {FUNDAMENTALS_DATA.map(({ data, id, infoText, title }) => (
            <FundamentalsMetrics
              key={idPrefix + id}
              title={title}
              data={data}
              infoText={infoText}
            />
          ))}
          <TaskAwarenessMetrics />
          <CodeAndBugMetrics />
          <CodingAssessments />
        </div>
      </div>
    </PrimaryLayout>
  )
}
