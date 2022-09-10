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

const Aim = () => {
  const nevadaTime = useDate()
  return (
    <S.Aim>
      <div className="billboard">
        <div>
          <h2>
            My aim is to collaborate with my partners and, through time, build
            lasting brands and digital experiences.
          </h2>
        </div>
      </div>
      <div className="meta">
        Based in Nevada
        <br />
        {nevadaTime}
      </div>
      <div className="meta">
        Based in Nevada
        <br />
        {nevadaTime}
      </div>
    </S.Aim>
  )
}

export default Aim
