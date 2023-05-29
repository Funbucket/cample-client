import { css } from '@emotion/react'
import type { CSSProperties, HTMLAttributes } from 'react'
import { emotionTheme } from '~/styles'

interface Props extends HTMLAttributes<HTMLSpanElement> {
  _fontSize: number
  textAlign?: CSSProperties['textAlign']
  weight?: string
  _color?: string
  whiteSpace?: CSSProperties['whiteSpace']
  lineHeight?: number
  letterSpacing?: number
}

const Text = ({
  _fontSize,
  textAlign = 'left',
  weight = '600',
  _color = emotionTheme.colors.black,
  whiteSpace,
  lineHeight,
  letterSpacing,
  children,
  ...rest
}: Props) => {
  return (
    <span
      css={css`
        font-size: ${_fontSize}px;
        text-align: ${textAlign};
        font-weight: ${weight};
        color: ${_color};
        box-shadow: 5px 5px 5px rgba(105, 105, 105, 0.5);
        line-height: ${lineHeight === undefined ? '100%' : `${lineHeight}px`};
        ${whiteSpace && `white-space:${whiteSpace};`}
        ${letterSpacing && `letter-spacing:${letterSpacing};`}
      `}
      {...rest}
    >
      {children}
    </span>
  )
}

export default Text
