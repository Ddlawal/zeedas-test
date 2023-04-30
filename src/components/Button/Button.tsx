import { FC } from 'react'
import cx from 'classnames'
import { ButtonProps } from './Button.interface'

export const Button: FC<ButtonProps> = ({
  children,
  className,
  secondary,
  primary,
  ...rest
}) => {
  return (
    <button
      className={cx(
        className,
        (primary || secondary) && 'w-[127px] rounded-[100px] py-[13px]',
        primary && 'bg-zeedas-btn-primary text-white',
        secondary && 'bg-zeedas-btn-secondary text-zeedas-text-primary'
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
