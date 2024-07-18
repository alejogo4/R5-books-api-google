import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { BorderRadiusSizes, PaddingSizes } from '../Common/Types'

const card = cva([
    'bg-white',
    'shadow',
    'transition-transform',
    'duration-500',
    'ease-in-out',
])

export interface CardProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
    padding?: PaddingSizes
    borderRadius?: BorderRadiusSizes
    className?: string
}

const Card: FC<CardProps> = ({
    children,
    padding = 'p-3 md:p-6',
    borderRadius = 'rounded-lg',
    className,
    ...props
}) => {
    className = clsx(className, padding, borderRadius)
    const stylesClass = twMerge(card({ className }))

    return (
        <div className={stylesClass} {...props}>
            {children}
        </div>
    )
}

export default Card
