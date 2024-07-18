import clsx from 'clsx'
import { HTMLAttributes, ReactNode, type FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { ColorFull, FontSize, TextAlign } from '../../Common/Types'


export interface ParagraphsProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  bold?: boolean
  color?: ColorFull
  className?: string
  fontSize?: FontSize
  testId?: string
  textAlign?: TextAlign
}

const Paragraphs: FC<ParagraphsProps> = ({
  children,
  bold,
  color,
  className,
  fontSize,
  testId,
  textAlign,
  ...props
}) => {
  const stylesClass = twMerge(
    clsx(
      bold && 'font-bold',
      fontSize && `text-${fontSize}`,
      color && `text-${color}`,
      textAlign && `text-${textAlign}`,
      className
    )
  )

  return (
    <p className={stylesClass} {...props}>
      {children}
    </p>
  )
}

export default Paragraphs
