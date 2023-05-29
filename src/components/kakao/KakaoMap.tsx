import type { CSSProperties, ReactNode } from 'react'
import { MapProvider } from '~/contexts'
// import {
//   CurrentLocationButton,
//   FilteringButton,
//   ViewStatusButton
// } from "./Buttons";
import Container from './Container'

export const DEFAULT_INITIAL_CENTER = {
  latitude: 36.36876803852456,
  longitude: 127.34399643362906,
}

interface Props {
  center?: Common.Coordinate
  level?: number
  maxLevel?: number
  onClick?: (map: kakao.maps.Map, e: kakao.maps.event.MouseEvent) => void
  onDragStart?: (map: kakao.maps.Map, e: kakao.maps.event.MouseEvent) => void
  onDragEnd?: (map: kakao.maps.Map, e: kakao.maps.event.MouseEvent) => void
  onZoomChanged?: (map: kakao.maps.Map) => void
  onTilesloaded?: (map: kakao.maps.Map) => void
  onLoaded?: (map: kakao.maps.Map) => void
  onBoundChange?: (map: kakao.maps.Map) => void
  style?: CSSProperties
  children?: ReactNode
}

const KakaoMap = ({
  center = DEFAULT_INITIAL_CENTER,
  level = 4,
  maxLevel = 8,
  onClick,
  onDragStart,
  onDragEnd,
  onZoomChanged,
  onTilesloaded,
  style,
  onLoaded,
  children,
}: Props) => {
  return (
    <MapProvider center={center} level={level} maxLevel={maxLevel} onLoaded={onLoaded}>
      <Container
        onClick={onClick}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onZoomChanged={onZoomChanged}
        onTilesloaded={onTilesloaded}
        style={style}
      >
        {children}
      </Container>
    </MapProvider>
  )
}

// KakaoMap.CurrentLocationButton = CurrentLocationButton;
// KakaoMap.FilteringButton = FilteringButton;
// KakaoMap.ViewStatusButton = ViewStatusButton;

export default KakaoMap
