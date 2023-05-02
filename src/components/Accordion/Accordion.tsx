import cx from 'classnames'
import { FC, ReactNode, useId, useState } from 'react'

import { AccordionItem } from '.'
import { RECENT_VISITORS } from '../../lib/constants'

const Header: FC<{ children?: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={cx(
      className,
      'text-left text-xs font-bold leading-[1.125rem] text-zeedas-text-gray'
    )}
  >
    {children}
  </div>
)

export const NameAvatar: FC<{ bg: string; color: string; name: string }> = ({
  name,
  bg,
  color,
}) => (
  <div
    className={cx(
      bg,
      color,
      'flex h-10 w-10 items-center justify-center rounded-full text-sm'
    )}
  >
    {name
      .split(' ')
      .map(n => n[0])
      .join('')}
  </div>
)

export const Accordion: FC = () => {
  const idPrefix = useId()
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div>
      <div className="mb-[12.5px] flex justify-between overflow-hidden px-4">
        <Header className="min-w-[13.85rem]">Name and email</Header>
        <Header className="min-w-[6rem]">Date</Header>
        <Header className="min-w-[9rem]">Location</Header>
        <Header className="min-w-[3.5rem]">Time spent</Header>
        <div className="min-w-[6rem]" />
      </div>
      {RECENT_VISITORS.map((visitors, i) => (
        <AccordionItem
          activeIndex={activeIndex}
          key={idPrefix + visitors.id}
          onClick={handleClick}
          index={i}
          {...visitors}
        />
      ))}
    </div>
  )
}
