import '@emotion/react'
import { emotionTheme } from '~/styles'

declare module '@emotion/react' {
  type EmotionTheme = typeof emotionTheme

  export interface Theme extends EmotionTheme {}
}
