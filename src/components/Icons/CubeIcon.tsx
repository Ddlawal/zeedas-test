import { FC } from 'react'
import { IconProps } from './icons.interface'

export const CubeIcon: FC = ({
  height = 18,
  width = 18,
  color = '#696F8C',
}: IconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 5.25L14.625 4.15625M16.5 5.25V7.125M16.5 5.25L14.625 6.34375M1.5 5.25L3.375 4.15625M1.5 5.25L3.375 6.34375M1.5 5.25V7.125M9 9.625L10.875 8.53125M9 9.625L7.125 8.53125M9 9.625V11.5M9 17.125L10.875 16.0312M9 17.125V15.25M9 17.125L7.125 16.0312M7.125 1.96875L9 0.875L10.875 1.96875M16.5 10.875V12.75L14.625 13.8438M3.375 13.8438L1.5 12.75V10.875"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
