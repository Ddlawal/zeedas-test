import { FC } from 'react'
import cx from 'classnames'
import { ButtonProps } from './Button.interface'

export const Button: FC<ButtonProps> = ({
  children,
  className,
  primary,
  ...rest
}) => {
  return (
    <button
      className={cx(
        className,
        (primary || rest.default) &&
          'h-12 w-[127px] rounded-[100px] py-[13px] text-sm transition-all duration-200 ease-in-out hover:font-medium',
        primary && 'bg-zeedas-btn-primary text-white',
        rest.default && 'bg-zeedas-btn-default text-zeedas-text-primary',
        'transition-all'
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
