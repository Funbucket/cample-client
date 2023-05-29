import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'
import { useNavigationValue } from '../atoms'

const BottomNavigation = () => {
  const { dimensions } = useTheme()
  const navigation = useNavigationValue()

  if (!navigation.bottom) {
    return null
  }

  return (
    <div
      css={css`
        height: ${dimensions.bottomNavigationHeight};
      `}
    >
      BottonNav
    </div>
  )
}

export default BottomNavigation
