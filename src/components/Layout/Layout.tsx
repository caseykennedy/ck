/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Layout:
// ___________________________________________________________________

import React, { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'

// Components
import Cursor from '../Cursor'
import Header from '../Header'
import Footer from '../Footer'

// Styles + Theme
import * as S from './styles.scss'
import 'react-responsive-modal/styles.css'

// ___________________________________________________________________

export type LayoutProps = {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

const Layout = ({ children, location }: LayoutProps) => {
  const { isDarkMode } = useDarkMode()
  useEffect(() => {
    const dataTheme = isDarkMode ? 'darkMode' : 'lightMode'
    document.documentElement.setAttribute('data-theme', dataTheme)
  }, [isDarkMode])

  console.log(
    `%c namelayer | decentralize the internet | built by tetra/ `,
    `background: #78FFF2; color: #000000`
  )
  return (
    <S.Wrapper>
      {/* <Cursor /> */}
      <Header />
      <S.Content>
        {children}
      </S.Content>
      <Footer location={location} />
    </S.Wrapper>
  )
}

export default Layout
