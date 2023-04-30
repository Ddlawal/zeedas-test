import { FC } from 'react'
import { IconProps } from './icons.interface'

export const DownIcon: FC<IconProps> = ({
  height = 6,
  width = 10,
  color = '#696F8C',
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684095 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684094 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z"
        fill={color}
      />
    </svg>
  )
}
