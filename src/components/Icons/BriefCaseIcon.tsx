import { FC } from 'react'
import { IconProps } from './icons.interface'

export const BriefCaseIcon: FC<IconProps> = ({
  height = 18,
  width = 16,
  color = '#696F8C',
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3.25C4 1.73122 5.23122 0.5 6.75 0.5H9.25C10.7688 0.5 12 1.73122 12 3.25V3.69269C12.572 3.74808 13.1407 3.81524 13.7057 3.89392C15.0526 4.08149 16 5.24901 16 6.57023V10.0386C16 11.1653 15.3058 12.2301 14.1705 12.5786C12.2185 13.1778 10.1462 13.5 8 13.5C5.8538 13.5 3.78149 13.1778 1.82951 12.5786C0.694234 12.2301 0 11.1653 0 10.0386V6.57023C0 5.24901 0.947371 4.08149 2.29435 3.89392C2.85933 3.81524 3.42796 3.74808 4 3.69269V3.25ZM10.5 3.25V3.57499C9.67296 3.52523 8.83939 3.5 8 3.5C7.16061 3.5 6.32704 3.52523 5.5 3.57499V3.25C5.5 2.55964 6.05964 2 6.75 2H9.25C9.94036 2 10.5 2.55964 10.5 3.25ZM8 9.5C7.44772 9.5 7 9.94772 7 10.5V10.51C7 11.0623 7.44772 11.51 8 11.51H8.01C8.56229 11.51 9.01 11.0623 9.01 10.51V10.5C9.01 9.94772 8.56229 9.5 8.01 9.5H8Z"
        fill={color}
      />
      <path
        d="M1 14.5552V13.8714C1.1256 13.9243 1.25542 13.9715 1.38933 14.0126C3.48234 14.6551 5.70295 15 8 15C10.297 15 12.5177 14.6551 14.6107 14.0126C14.7446 13.9715 14.8744 13.9243 15 13.8714V14.5552C15 15.9024 14.0154 17.0854 12.6369 17.2406C11.1147 17.4119 9.56747 17.4999 8 17.4999C6.43253 17.4999 4.88533 17.4119 3.36311 17.2406C1.98461 17.0854 1 15.9024 1 14.5552Z"
        fill={color}
      />
    </svg>
  )
}
