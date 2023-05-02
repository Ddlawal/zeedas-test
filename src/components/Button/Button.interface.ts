import { DetailedHTMLProps } from 'react'

export type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { primary?: boolean; default?: boolean }
