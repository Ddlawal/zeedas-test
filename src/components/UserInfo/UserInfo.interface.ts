import { FC } from 'react'

export interface UserInfoProps {
  avatarSize?: number
  showFollowButton?: boolean
  showRank?: boolean
}

export interface ProgrammingSkillsI {
  id: number
  languageRating: string
  icon: FC | string
  color: string
  textColor?: string
}
