import { FC } from 'react'
import { IconProps } from './icons.interface'

export const CommentIcon: FC<IconProps> = ({
  height = 18,
  width = 18,
  color = '#696F8C',
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.875 9.63279C0.875 10.967 1.81118 12.1284 3.13122 12.3225C3.98089 12.4474 4.83925 12.5456 5.70542 12.6162C6.17209 12.6543 6.59898 12.8985 6.8587 13.288L9 16.5L11.1413 13.2881C11.401 12.8985 11.8279 12.6543 12.2946 12.6163C13.1607 12.5457 14.0191 12.4475 14.8687 12.3226C16.1888 12.1285 17.125 10.9671 17.125 9.63288V4.61713C17.125 3.28288 16.1888 2.12152 14.8687 1.92745C12.9534 1.64584 10.9938 1.5 9.00024 1.5C7.00647 1.5 5.04676 1.64587 3.13122 1.92752C1.81118 2.12161 0.875 3.28297 0.875 4.6172V9.63279Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
