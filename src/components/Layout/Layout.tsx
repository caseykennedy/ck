/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Layout:
// ___________________________________________________________________

import React from 'react'

// Components
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
  console.log(
    `%c casey kennedy | decentralize the internet`,
    `background: #78FFF2; color: #000000`
  )
  return (
    <S.Wrapper className="noise">
      <Header />
      <S.Content>{children}</S.Content>
      <Footer location={location} />
    </S.Wrapper>
  )
}

export default Layout
