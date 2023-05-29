import { Text, Flex, VStack, Box, Button, Center } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'

const Page = () => {
  const route = useRouter()

  return (
    <Box
      css={css`
        background-color: #56a2d9;
        height: 100vh;
      `}
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        css={css`
          height: 90vh;
        `}
      >
        <VStack>
          <Text
            css={css`
              height: 47px;
              font-weight: 800;
              font-size: 50px;
              color: #fff;
            `}
          >
            CAMPLE
          </Text>
          <Text
            css={css`
              font-size: 20px;
              color: #fff;
            `}
          >
            Campus Place
          </Text>
        </VStack>
      </Flex>
      <Center>
        <Button
          colorScheme="whiteAlpha"
          borderRadius="1rem"
          onClick={() => {
            route.push('/map')
          }}
        >
          캠플 시작하기
        </Button>
      </Center>
    </Box>
  )
}

export default Page
