export type TextAlign = 'left' | 'center' | 'right' | 'justify' | 'start' | 'end'

export type PaddingSizes = 'p-0' | 'p-1' | 'p-2' | 'p-3' | 'p-4' | 'p-5' | 'p-6'

export type Color =
  | 'eva'
  | 'independiente'
  | 'aqua'
  | 'llama'
  | 'camino'
  | 'stone'
  | 'apple'
  | 'nature'
  | 'white'

export type ToneColor = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

export type FontSize = '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'sm' | 'xs' | 'base'

export type BorderRadiusSizes =
  | 'rounded-none'
  | 'rounded-sm'
  | 'rounded'
  | 'rounded-md'
  | 'rounded-lg'
  | 'rounded-xl'
  | 'rounded-2xl'
  | 'rounded-3xl'
  | 'rounded-full'

export type ColorFull = `${Color}-${ToneColor}` | 'bg-white' | 'white' | 'black'

export type BgColorFull = `bg-${Color}-${ToneColor}` | 'bg-white'

export type TextColorFull = `text-${Color}-${ToneColor}` | 'text-white'
