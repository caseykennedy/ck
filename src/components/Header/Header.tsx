// Header
// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

// Components
import Icon from '../Icons'
// import MobileNav from './MobileNav'
// import Modal from '../Modal'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Header = () => {
  const [theme, setTheme] = useState('default')
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)

  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'lightMode' : 'default')
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      document.documentElement.setAttribute('data-theme', localTheme)
    }
  }, [])

  return (
    <>
      <S.Header>
        <div className="logo">
          <div className="symbol">
            <Link to="/" aria-label="Back to index page">
              Casey Kennedy
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          onKeyDown={toggleTheme}
          className="yinyang btn"
        >
          ◒
        </button>
      </S.Header>

      {/* <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal> */}
    </>
  )
}

export default Header
