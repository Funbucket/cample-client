import { Box } from '@chakra-ui/react'
import { KakaoMap, MapMarker } from '~/components/kakao'
import { motion } from 'framer-motion'
import { Pin } from '@jsons/map'
import Lottie from 'lottie-react'
import { Flex, padding, size } from '@toss/emotion-utils'
import { css } from '@emotion/react'
import { Text } from '~/components/common'
import { markerdata } from '~/data'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  return (
    <Box w="100%" h="100%">
      <KakaoMap>
        {markerdata.map((item) => (
          <MapMarker
            key={item.id}
            position={{
              latitude: item.lat,
              longitude: item.lng,
            }}
          >
            <motion.div
              initial={{
                scale: 0,
                y: 40,
              }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => router.push(`/info/${item.id}`)}
              style={{
                width: '50px',
                height: '50px',
                position: 'relative',
                top: '0px',
                left: '25px',
                borderRadius: 25,
                cursor: 'pointer',
              }}
            >
              <Lottie
                loop
                autoplay
                animationData={Pin}
                css={css`
                  ${size({ width: 90, height: 100 })}
                  position: absolute;
                  top: -55px;
                  right: -20px;
                  pointer-events: none;
                  user-select: none;
                `}
              />
              <Flex.Center
                css={css`
                  ${padding({
                    top: 43,
                  })}
                `}
              >
                <Text
                  _color="#000"
                  _fontSize={15}
                  css={css`
                    ${padding({
                      x: 11,
                      y: 4,
                    })}
                    border-radius: 100px;
                    background-color: rgba(255, 255, 255, 0.7);
                  `}
                >
                  {item.title}
                </Text>
              </Flex.Center>
            </motion.div>
          </MapMarker>
        ))}
      </KakaoMap>
    </Box>
  )
}

export default Page
