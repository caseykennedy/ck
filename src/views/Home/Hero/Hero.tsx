// Hero:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'

// Components
import Icon from '../../../components/Icons'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Hero = () => {
  const nevadaTime = useDate()
  return (
    <S.Hero>
      <div className="billboard">
        <div>
          <h1>
            Helping brands develop
            <br />
            cutting-edge digital experiences.
          </h1>
        </div>
      </div>
      <div className="meta">
        <div>
          Based in Nevada
          <br />
          {nevadaTime}
        </div>
        <div>
          <p>
            Find me on
            <br />
            <a href="/" target="_blank" rel="noopener">
              GitHub
            </a>{' '}
            /{' '}
            <a href="/" target="_blank" rel="noopener">
              Dribbble
            </a>{' '}
            /{' '}
            <a href="/" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </S.Hero>
  )
}

export default Hero
