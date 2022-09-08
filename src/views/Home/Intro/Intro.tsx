// Intro:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'

// Components
import Icon from '../../../components/Icons'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const polyVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 3,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const staggerItems = {
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.5 },
  },
}

const Intro = () => (
  <S.Intro
    variants={staggerItems}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.8, margin: '200px' }}
  >
    <div />
    <div>
      <p className="lead">
        I’ve been practicing design and web development for over 14 years and
        independently consulting for over 8 years. Collaborating with startups,
        established brands and anyone with a great idea—advising on visual
        identity, technical strategy and digital tooling.
      </p>
      {/*
        <p className="lead">
          I collaborate with a range of clients that recognize the value of
          design and continue to work alongside them as they grow.
        </p> */}
    </div>
  </S.Intro>
)

export default Intro
