// useMousePosition utility hook
// X and Y mouse coordinates
// https://gist.github.com/whoisryosuke/99f23c9957d90e8cc3eb7689ffa5757c
// const { x, y } = useMousePosition()

import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null
    y: number | null
  }>({ x: null, y: null })

  const updateMousePosition = (ev: MouseEvent) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

export default useMousePosition
