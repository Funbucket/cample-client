import { colors } from './colors'
import { dimensions } from './dimensions'

export const emotionTheme = {
  colors,
  dimensions,
} as const

export { colors, dimensions }

export type EmotionTheme = typeof emotionTheme
