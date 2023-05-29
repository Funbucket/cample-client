import { Box, Center, HStack, Text } from '@chakra-ui/react'
import { css, useTheme } from '@emotion/react'
import { useNavigationValue } from '../atoms'

const TopNavigation = () => {
  const { dimensions } = useTheme()
  const navigation = useNavigationValue()

  if (!navigation.top) {
    return null
  }

  return (
    <Box
      mt="10px"
      css={css`
        height: ${dimensions.topNavigationHeight};
      `}
    >
      <Center>
        <Text as="b" fontSize="20px">
          {navigation.top.title}
        </Text>
      </Center>
    </Box>
  )
}

export default TopNavigation
