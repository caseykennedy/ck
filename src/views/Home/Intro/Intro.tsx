// Aim:

import * as React from 'react'
import { motion } from 'framer-motion'

// Components
import Icon from '../../../components/Icons'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Intro = () => {
  const nevadaTime = useDate()
  return (
    <S.Intro>
      <div className="billboard">
        <h2>
          I&apos;ve been practicing design and development for over 14 years and
          independently consulting for over 8 years. Collaborating with
          startups, established brands and anyone with a great idea.
        </h2>
      </div>
      <div className="meta">
        <div>
          Based in Nevada
          <br />
          {nevadaTime}
        </div>
        <div>
          Based in Nevada
          <br />
          {nevadaTime}
        </div>
      </div>
    </S.Intro>
  )
}

export default Intro
