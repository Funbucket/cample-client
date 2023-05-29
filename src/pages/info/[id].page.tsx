import { Avatar, Box, Center, HStack, Text, VStack } from '@chakra-ui/react'
import { dragonfly, flowers, grass, user } from '@images/common'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import { Navigation } from '~/layouts/AppLayout/navigations'

const Page = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Navigation top={{ title: '장소 세부 정보' }}>
      <Center>
        <HStack>
          <Image
            alt="cnu emblem"
            src={dragonfly}
            css={css`
              width: 100px !important;
              height: 100px !important;
            `}
          />
          <Image
            alt="cnu emblem"
            src={flowers}
            width={100}
            height={100}
            css={css`
              width: 100px !important;
              height: 100px !important;
            `}
          />
          <Image
            alt="cnu emblem"
            src={grass}
            width={100}
            height={100}
            css={css`
              width: 100px !important;
              height: 100px !important;
            `}
          />
        </HStack>
      </Center>
      <Box ml="10px" mt="10px">
        <Text color="#929292">중앙 도서관 앞 공원</Text>
        <Text as="b">좋아요 162개</Text>
      </Box>
      <Box bg="#58B9FF" mt="80px" width="100px" borderTopRightRadius="5px" borderBottomRightRadius="5px">
        <Text pl="0.5rem" as="b" fontSize="lg" color="#FFF">
          댓글 62개
        </Text>
      </Box>
      <VStack alignItems="flex-start" ml="10px">
        <HStack mt="10px">
          <Avatar size="sm" src={`${user}`} />
          <VStack alignItems="flex-start">
            <Text>익명1 3분 전</Text>
            <Text
              css={css`
                margin-top: 0px !important;
              `}
            >
              막동은 ㅇㅈ이지 ...
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <Avatar size="sm" src={`${user}`} />
          <VStack alignItems="flex-start">
            <Text>익명1 3분 전</Text>
            <Text
              css={css`
                margin-top: 0px !important;
              `}
            >
              막동은 ㅇㅈ이지 ...
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <Avatar size="sm" src={`${user}`} />
          <VStack alignItems="flex-start">
            <Text>익명1 3분 전</Text>
            <Text
              css={css`
                margin-top: 0px !important;
              `}
            >
              막동은 ㅇㅈ이지 ...
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Navigation>
  )
}

export default Page
