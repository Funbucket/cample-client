import { ReactNode, useEffect } from 'react'
import { useNavigationValue, useSetNavigation } from '../atoms'

type Props = ReturnType<typeof useNavigationValue> & {
  children: ReactNode
}

const Navigation = ({ top = null, bottom = false, children }: Props) => {
  const set = useSetNavigation()

  useEffect(() => {
    set.all({
      top,
      bottom,
    })

    return () =>
      set.all((prev) => ({
        ...prev,
        top: null,
        bottom: false,
      }))
  }, [bottom, set, top])

  return <>{children}</>
}

export default Navigation
