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
    <PrimaryLayout showHeaderBorder={true} className="mb-20 px-20">
      <div className="mt-6 flex gap-x-20">
        <div className="max-w-[24.5rem]">
          <UserInfo avatarSize={80} showRank />
        </div>
        <div className="w-full">
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
