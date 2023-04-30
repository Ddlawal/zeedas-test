import { FC } from 'react'
import { IconProps } from './icons.interface'

export const LocationIcon: FC = ({
  height = 18,
  width = 14,
  color = '#696F8C',
}: IconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.61667 17.1258L6.675 17.1591L6.69833 17.1724C6.79086 17.2225 6.89439 17.2487 6.99958 17.2487C7.10477 17.2487 7.20831 17.2225 7.30083 17.1724L7.32417 17.1599L7.38333 17.1258C7.70926 16.9325 8.0273 16.7262 8.33667 16.5074C9.13756 15.942 9.88587 15.3055 10.5725 14.6058C12.1925 12.9474 13.875 10.4558 13.875 7.24994C13.875 5.42658 13.1507 3.67789 11.8614 2.38858C10.572 1.09927 8.82336 0.374939 7 0.374939C5.17664 0.374939 3.42795 1.09927 2.13864 2.38858C0.849328 3.67789 0.125 5.42658 0.125 7.24994C0.125 10.4549 1.80833 12.9474 3.4275 14.6058C4.11387 15.3055 4.86189 15.942 5.6625 16.5074C5.97214 16.7263 6.29045 16.9325 6.61667 17.1258ZM7 9.74994C7.66304 9.74994 8.29893 9.48655 8.76777 9.01771C9.23661 8.54887 9.5 7.91298 9.5 7.24994C9.5 6.5869 9.23661 5.95101 8.76777 5.48217C8.29893 5.01333 7.66304 4.74994 7 4.74994C6.33696 4.74994 5.70107 5.01333 5.23223 5.48217C4.76339 5.95101 4.5 6.5869 4.5 7.24994C4.5 7.91298 4.76339 8.54887 5.23223 9.01771C5.70107 9.48655 6.33696 9.74994 7 9.74994Z"
        fill={color}
      />
    </svg>
  )
}