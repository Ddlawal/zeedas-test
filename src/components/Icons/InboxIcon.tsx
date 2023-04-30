import { FC } from 'react'
import { IconProps } from './icons.interface'

export const InboxIcon: FC<IconProps> = ({
  height = 16,
  width = 18,
  color = '#696F8C',
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.875 9.25H4.09119C4.80138 9.25 5.45063 9.65125 5.76824 10.2865L5.98176 10.7135C6.29937 11.3487 6.94862 11.75 7.65881 11.75H10.3412C11.0514 11.75 11.7006 11.3487 12.0182 10.7135L12.2318 10.2865C12.5494 9.65125 13.1986 9.25 13.9088 9.25H17.125M0.875 9.53194V13C0.875 14.0355 1.71447 14.875 2.75 14.875H15.25C16.2855 14.875 17.125 14.0355 17.125 13V9.53194C17.125 9.34503 17.0971 9.15917 17.0421 8.98053L15.0323 2.44859C14.7902 1.66185 14.0633 1.125 13.2402 1.125H4.75983C3.93669 1.125 3.20981 1.66185 2.96774 2.44859L0.957914 8.98053C0.902947 9.15917 0.875 9.34503 0.875 9.53194Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
