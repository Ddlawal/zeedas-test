import { FC } from 'react'

import {
  CodeAndBugMetrics,
  CodingAssessments,
  FundamentalsMetrics,
  SpeedAndAccuracyMetrics,
  TaskAwarenessMetrics,
} from '../../components/Metrics'
import { UserInfo } from '../../components/UserInfo'
import { PrimaryLayout } from '../../layout/PrimaryLayout'
import { REVIEW_FUNDAMENTALS, SUBMIT_FUNDAMENTALS } from '../../lib/constants'

export const Resume: FC = () => {
  return (
    <PrimaryLayout
      showHeaderBorder={true}
      className="mx-auto mb-20 w-[51rem] px-10 lg:w-full lg:px-20"
    >
      <div className="mx-auto mt-6 w-full lg:flex lg:gap-x-20">
        <div className="lg:max-w-[24.5rem] ">
          <UserInfo avatarSize={80} showRank />
        </div>
        <div className="w-[50rem]">
          <div className="mb-5 text-[1.125rem] font-extrabold text-zeedas-text-primary">
            Metrics
          </div>
          <SpeedAndAccuracyMetrics />
          {[
            { title: 'Submit fundamentals', data: SUBMIT_FUNDAMENTALS },
            { title: 'Review fundamentals', data: REVIEW_FUNDAMENTALS },
          ].map(({ data, title }) => (
            <FundamentalsMetrics title={title} data={data} />
          ))}
          <TaskAwarenessMetrics />
          <CodeAndBugMetrics />
          <CodingAssessments />
        </div>
      </div>
    </PrimaryLayout>
  )
}
