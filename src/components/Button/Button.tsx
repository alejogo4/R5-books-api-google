import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import type { FC, ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Loader } from './Loader'

const button = cva(
  [
    'relative inline-flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'select-none',
    'align-middle',
    'font-bold',
    'text-white'
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary',
          'bg-primary-light',
          'shadow-md',
          'outline-none',
          'hover:bg-independiente-50',
          'active:bg-primary',
          'active:ring',
          'active:ring-eva-30',
        ],
        custom: [''],
      },
      size: {
        large: ['py-2', 'px-1.5', 'rounded-lg', 'text-base'],
        medium: ['py-1', 'px-4', 'rounded-md', 'text-sm'],
        small: ['py-1', 'px-4', 'rounded', 'text-xs'],
      },
      widthFull: {
        full: ['w-full'],
        min: ['w-min'],
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        size: 'medium',
        class: '',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'large',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  testId?: string
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'right' | 'left'
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
  className,
  type,
  variant,
  size,
  widthFull,
  disabled,
  testId,
  loading,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  className = clsx(
    className,
    disabled &&
      'text-text-light cursor-not-allowed active:text-text-light hover:text-stone-70',
    disabled && 'bg-stone-10 hover:bg-stone-10'
  )

  const stylesClass = twMerge(button({ className, variant, size, widthFull }))
  return (
    <button
      onClick={onClick}
      className={stylesClass}
      type={type ?? 'button'}
      disabled={disabled}
      {...props}
    >
      {loading ? <Loader /> : null}
      {(iconPosition === 'left' && icon) ?? null}
      {children ?? null}
      {(iconPosition === 'right' && icon) ?? null}
    </button>
  )
}

export default Button
