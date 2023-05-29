/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Context } from './MapProvider.hooks'

type Props = {
  center: Common.Coordinate
  level: number
  maxLevel: number
  onLoaded?: (map: kakao.maps.Map) => void
  children: ReactNode
}

export const MapProvider = ({ center, level, maxLevel, onLoaded, children }: Props) => {
  const [, setRender] = useState({})
  const [map, setMap] = useState<kakao.maps.Map | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  const render = () => setRender(() => {})

  useEffect(() => {
    kakao.maps.load(() => {
      if (mapRef.current) {
        const newMap = new window.kakao.maps.Map(mapRef.current, {
          draggable: true,
          center: new kakao.maps.LatLng(center.latitude, center.longitude),
          level,
        })
        if (maxLevel) {
          newMap.setMaxLevel(maxLevel)
        }

        setMap(newMap)
        onLoaded?.(newMap)
      }
    })
  }, [])

  return <Context.Provider value={{ map, mapRef, render }}>{children}</Context.Provider>
}
