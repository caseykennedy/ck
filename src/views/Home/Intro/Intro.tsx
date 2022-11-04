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
        {/* <div>
          <h4>experience</h4>
          atlantis casino
          <br />
          noip.com
          <br />
          medium advertising
          <br />
          tetra/
          <br />
          miner token
          <br />
          dWeb foundation
          <br />
          bob wallet
        </div> */}
        {/* <div>
          I can help with:
          <br />
          Defining a bold creative vision
          <br />
          Creating a visual identity that gets noticed
          <br />
          Evolving your current brand Look and feel
        </div> */}
      </div>
    </S.Intro>
  )
}

export default Intro
