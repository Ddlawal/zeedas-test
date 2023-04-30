import { HeroIcon, HomeIcon, ViewerStatsIcon } from '../components/Icons'

export const COLORS = {
  BORDER_GRAY: '#D8DAE5',
  TEXT_BLUE: '#23B3E8',
} as const

export const NAV_LINKS = [
  {
    to: '/',
    label: 'Home',
    icon: HomeIcon,
  },
  {
    to: '/resume',
    label: 'Resume',
    icon: HeroIcon,
  },
  {
    to: '/viewer-stats',
    label: 'Viewer Stats',
    icon: ViewerStatsIcon,
  },
] as const
