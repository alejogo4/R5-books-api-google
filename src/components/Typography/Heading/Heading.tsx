import clsx from 'clsx'
import React, { FC, HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { ColorFull, FontSize, TextAlign } from '../../Common/Types'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

const baseHeadingClasses = [
  'text-4xl', //H1
  'text-3xl', //H2
  'text-2xl', //H3
  'text-xl', //H4
  'text-lg', //H5
  'text-base', //H6
]

const Heading: FC<TextComponentProps> = ({
  level,
  bold,
  fontSize,
  color,
  className,
  children,
  textAlign,
  style,
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements
  const textClasses = clsx(
    level && baseHeadingClasses[level - 1],
    bold && 'font-bold',
    fontSize && `text-${fontSize}`,
    color && `text-${color}`,
    textAlign && `text-${textAlign}`,
    className
  )
  const textStyles = twMerge(textClasses)

  return (
    <Component style={style} className={textStyles}>
      {children}
    </Component>
  )
}

interface TextComponentProps extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel
  bold?: boolean
  fontSize?: FontSize
  color?: ColorFull
  className?: string
  textAlign?: TextAlign
  children: ReactNode
  style?: React.CSSProperties
}

export default Heading
