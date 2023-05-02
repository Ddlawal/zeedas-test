export type AccordionItemProps = RecentVisitorsI & {
  activeIndex: number
  index: number
  onClick: (index: number) => void
}

export interface RecentVisitorsI {
  id: number
  bg: string
  color: string
  name: string
  email: string
  date: string
  time: string
  location: string
  device: string
  timeSpent: string
  readPercent: number
}
