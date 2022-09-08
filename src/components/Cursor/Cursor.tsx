import React, { useEffect, useState } from 'react'
import * as S from './styles.scss'

const Cursor = () => {
  // Cursor hover
  const [cursorHovered, setCursorHovered] = useState(false)
  const handleCursorHoveredEnter = () => setCursorHovered(true)
  const handleCursorHoveredLeave = () => setCursorHovered(false)

  useEffect(() => {
    // Mouse coordinates
    const root = document.documentElement
    window.addEventListener('mousemove', (e) => {
      root.style.setProperty('--mouse-x', `${e.clientX}px`)
      root.style.setProperty('--mouse-y', `${e.clientY}px`)
    })

    // Cursor hover
    document.querySelectorAll('.js-hover').forEach((elem) => {
      elem.addEventListener('mouseenter', handleCursorHoveredEnter)
      elem.addEventListener('mouseleave', handleCursorHoveredLeave)
    })

    // Remove event listener on cleanup
    return () => {
      // Mouse coordinates
      window.removeEventListener('mousemove', (e) => {
        root.style.setProperty('--mouse-x', `${e.clientX}px`)
        root.style.setProperty('--mouse-y', `${e.clientY}px`)
      })

      // Cursor hover
      document.querySelectorAll('.js-hover').forEach((elem) => {
        elem.addEventListener('mouseenter', handleCursorHoveredEnter)
        elem.addEventListener('mouseleave', handleCursorHoveredLeave)
      })
    }
  })
  return <S.Cursor className={cursorHovered ? 'state--hover' : ''} />
}

export default Cursor

// ___________________________________________________________________
