import { FC } from 'react'
import { IconProps } from './icons.interface'

export const HomeIcon: FC<IconProps> = ({
  height = 15,
  width = 14,
  color = '#696F8C',
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 14V7.5H9V14M1 5.55L7 1L13 5.55V12.7C13 13.0448 12.8595 13.3754 12.6095 13.6192C12.3594 13.863 12.0203 14 11.6667 14H2.33333C1.97971 14 1.64057 13.863 1.39052 13.6192C1.14048 13.3754 1 13.0448 1 12.7V5.55Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
