import { FC } from 'react'
import { IconProps } from './icons.interface'

export const BoltIcon: FC = ({
  height = 18,
  width = 16,
  color = '#696F8C',
}: IconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.125 10.25L9.875 0.875L8 7.75H14.875L6.125 17.125L8 10.25H1.125Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
