import { FC } from 'react'

export interface UserInfoProps {
  avatarSize?: number
  showFollowButton?: boolean
  showRank?: boolean
}

export interface ProgrammingSkillsI {
  color: string
  icon: FC | string
  id: number
  language: string
  percent: number
  textColor?: string
}
