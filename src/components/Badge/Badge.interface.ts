import { ReactNode } from 'react'

export type BadgeColorI = 'green' | 'orange'

export interface BadgeProps {
  color: BadgeColorI
  text: string
  className?: string
}

export interface SkillBadgeProps {
  icon: ReactNode
  percent: number
  text: string
  className?: string
  textColor?: string
}
