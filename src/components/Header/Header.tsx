// Header
// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { useDarkMode } from 'usehooks-ts'

// Components
import Overlay from './Overlay'
import Modal from '../Modal'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Header = () => {
  const { isDarkMode, toggle } = useDarkMode(true)
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)

  useEffect(() => {
    const dataTheme = isDarkMode ? 'darkMode' : 'lightMode'
    document.documentElement.setAttribute('data-theme', dataTheme)
  }, [isDarkMode])

  return (
    <>
      <S.Header>
        <div className="logo">
          <Link
            to="/"
            onClick={() => setNavOpen(false)}
            aria-label="Back to index page"
          >
            ck
          </Link>
        </div>

        <div className="utils">
          <button
            type="button"
            onClick={toggleMenu}
            className="utils__info-toggle"
          >
            {isNavOpen ? 'hide' : 'tl;dr'}
          </button>

          <button
            type="button"
            onClick={toggle}
            className={`utils__theme-toggle ${
              isDarkMode ? 'utils__theme-toggle__active' : ''
            }`}
          >
            ◒
          </button>
        </div>
      </S.Header>

      <Modal open={isNavOpen} close={toggleMenu}>
        <Overlay isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>
    </>
  )
}

export default Header
