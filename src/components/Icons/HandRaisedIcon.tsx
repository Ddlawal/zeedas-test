import { FC } from 'react'
import { IconProps } from './icons.interface'

export const HandRaisedIcon: FC<IconProps> = ({
  height = 20,
  width = 16,
  color = '#696F8C',
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.37501 3.8125C6.37501 3.08763 5.78738 2.5 5.06251 2.5C4.33763 2.5 3.75001 3.08763 3.75001 3.8125L3.75 6.3125M6.37501 3.8125L6.37502 2.5625C6.37502 1.83763 6.96264 1.25 7.68752 1.25C8.41239 1.25 9.00002 1.83763 9.00002 2.5625L9.00002 3.8125M6.37501 3.8125L6.4375 8.75M9.00002 9.375V3.8125M9.00002 3.8125C9.00002 3.08763 9.58765 2.5 10.3125 2.5C11.0374 2.5 11.625 3.08763 11.625 3.8125V12.5M3.75 6.3125C3.75 5.58763 3.16237 5 2.4375 5C1.71263 5 1.125 5.58763 1.125 6.3125V13.125C1.125 16.2316 3.6434 18.75 6.75 18.75H8.43156C9.59189 18.75 10.7047 18.2891 11.5252 17.4686L12.9686 16.0252C13.7891 15.2047 14.25 14.0919 14.25 12.9316L14.2525 11.245C14.2538 11.1008 14.3084 10.9611 14.4173 10.8522C14.9298 10.3397 14.9298 9.50865 14.4173 8.99609C13.9047 8.48352 13.0737 8.48352 12.5611 8.99609C11.9429 9.61426 11.6315 10.4259 11.6276 11.2346M3.75 6.3125V10M8.975 13.5983C9.2999 13.2734 9.66958 13.0206 10.0642 12.8399C10.5584 12.6135 11.0917 12.5002 11.625 12.5M11.6266 12.5H11.625"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
