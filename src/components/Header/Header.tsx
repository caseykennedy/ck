// Header
// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

// Styles
import * as S from './styles.scss'

// Components
import Icon from '../Icons'
// import MobileNav from './MobileNav'
// import Modal from '../Modal'
import Symbol from '../SVG/Symbol'
import HandshakeLogo from '../SVG/Handshake'

// ___________________________________________________________________

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)

  return (
    <>
      <S.Header>
        <div className="logo">
          <div className="symbol">
            <Symbol />
          </div>
        </div>

        <div className="marquee">Namelayer</div>

        <div className="twitter">
          <Icon name="twitter" />
        </div>
      </S.Header>

      {/* <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal> */}
    </>
  )
}

export default Header
