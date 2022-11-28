// Header
// ___________________________________________________________________

import React, { useState } from 'react'
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
          <button type="button" onClick={toggleMenu} className="info-toggle">
            {isNavOpen ? 'hide' : 'info'}
          </button>
          <button
            type="button"
            onClick={toggle}
            className={`theme-toggle ${
              isDarkMode ? 'theme-toggle__active' : ''
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
