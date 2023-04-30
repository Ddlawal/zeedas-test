import { ReactNode } from 'react'

export interface BadgeProps {
  color: 'green' | 'orange'
  text: string
  className?: string
}

export interface SkillBadgeProps {
  icon: ReactNode
  text: string
  className?: string
}
