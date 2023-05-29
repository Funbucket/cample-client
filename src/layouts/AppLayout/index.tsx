import { css } from '@emotion/react'
import { flex, height100, Stack } from '@toss/emotion-utils'
import { BottomNavigation, TopNavigation } from './navigations'

interface Props {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <Stack.Vertical
      gutter={0}
      css={css`
        ${height100}
        max-width: 560px;
        margin: 0 auto;
        border: 1px solid; // 임시
      `}
    >
      <TopNavigation />
      <main
        css={css`
          ${flex({ direction: 'column' })}
          flex: 1;
          ${height100}
        `}
      >
        {children}
      </main>
      <BottomNavigation />
    </Stack.Vertical>
  )
}

export default AppLayout
