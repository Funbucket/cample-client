import { atom, useAtomValue, useSetAtom } from 'jotai'

interface InitialStateType {
  top?: {
    title?: string
    isBack?: boolean
    isClose?: boolean
  } | null
  bottom?: boolean
}

const initialState: InitialStateType = {
  top: null,
  bottom: undefined,
}

const navigationAtom = atom<InitialStateType>(initialState)

const useNavigationValue = () => useAtomValue(navigationAtom)
const useSetNavigation = () => {
  const set = useSetAtom(navigationAtom)

  return {
    all: set,
    title: (title: string) =>
      set((prev) => ({
        ...prev,
        top: { ...prev.top, title },
      })),
  }
}

export { useNavigationValue, useSetNavigation }
