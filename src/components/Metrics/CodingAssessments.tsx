import { Divider, Progress } from 'antd'
import { FC, useId } from 'react'

import { MetricsTitle } from '.'
import { AssessmentProps } from './Metrics.interface'
import { Card } from '../Card'
import { ClipBoardIcon, DownIcon, QualifiedIcon } from '../Icons'
import { RaisingProgress } from '../RaisingProgress'
import { CODING_ASSESSMENTS, COLORS } from '../../lib/constants'
import { useProgressPercent } from '../../lib/hooks/useProgressPercent'

const Assessment: FC<AssessmentProps> = ({
  percentile,
  percent,
  score,
  title,
}) => {
  const { progressPercent } = useProgressPercent(percent)

  return (
    <div className="my-[11px] ml-6 mr-[18px] flex items-center gap-x-12">
      <div className="flex w-full items-center gap-x-3">
        <ClipBoardIcon /> {title}
      </div>
      <div className="flex w-full items-center">
        <Progress
          className="mr-10"
          type="circle"
          percent={progressPercent}
          format={() => (
            <span className="text-base leading-[22px] text-zeedas-text-dark">
              {score}
            </span>
          )}
          size={46.67}
          strokeWidth={10}
          strokeColor={COLORS.PROGRESS_GREEN_STROKE}
          trailColor={COLORS.PROGRESS_GREEN_TRAIL}
        />

        <RaisingProgress
          className="mr-3"
          percent={percentile}
          strokeColor={COLORS.PROGRESS_GREEN_STROKE}
          trailColor={COLORS.PROGRESS_GREEN_TRAIL}
        />

        <div className="font-semibold">
          <span className="text-sm text-zeedas-text-dark">{percentile}</span>
          <sup className="-top-[4px] text-[10px] text-zeedas-text-dark">th</sup>
          <span className="text-xs text-zeedas-text-gray">
            {' '}
            global percentile
          </span>
        </div>

        <div className="ml-auto pr-2.5">
          <DownIcon />
        </div>
      </div>
    </div>
  )
}

export const CodingAssessments: FC = () => {
  const idPrefix = useId()

  return (
    <Card>
      <div className="item-center my-[18px] ml-6 mr-[18px] flex justify-between">
        <MetricsTitle
          title="Coding assessments"
          infoText="Figuring out tasks and action points"
        />
        <div className="flex h-4 items-center">
          <span className="text-sm text-zeedas-text-gray">Powered by</span>
          <img
            src={QualifiedIcon}
            alt="Qualified Icon"
            width={76}
            height={14}
          />
        </div>
      </div>

      {CODING_ASSESSMENTS.map(assessment => (
        <div key={idPrefix + assessment.id}>
          <Divider
            type="horizontal"
            orientation="center"
            className="m-0 border-zeedas-border-gray"
          />
          <Assessment {...assessment} />
        </div>
      ))}
    </Card>
  )
}
