// Marquee:
// ___________________________________________________________________

import * as React from 'react'
import FastMarquee from 'react-fast-marquee'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
}

const MarqueeProps = {
  gradient: false,
  pauseOnHover: false,
  speed: 20,
}

const Marquee = ({ children }: Props) => (
  <S.Marquee>
    <FastMarquee {...MarqueeProps}>{children}<div/></FastMarquee>
  </S.Marquee>
)

export default Marquee
