import { FC } from 'react'
import { IconProps } from '../Icons/icons.interface'

export interface TimelineCaptionProps {
  title: string
  subtitle: string
}

export interface TimelineItemsI {
  badgeColor: string
  badgeText: string
  badgeTextColor: string
  date: string
  captionText: string
  captionSubtext: string
  icon?: FC<IconProps> | FC<React.SVGProps<SVGSVGElement> & { title?: string }>
  iconColor: string
  imageSrc: string
}
