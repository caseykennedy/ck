// Aim:

import * as React from 'react'
import { motion } from 'framer-motion'

// Components
import Accordion from '../../../components/Accordion'
import Icon from '../../../components/Icons'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Approach = () => {
  const nevadaTime = useDate()
  return (
    <S.Approach>
      <div>
        <Accordion
          title="Multifaceted
              <br />
              Harmonic Design
              <br />
              Approach:"
        >
          <div className="accordion-inner">
            <p>
              Design is much more than it&#39;s visual representation. It is
              product whole vision from the onset. My practice is based on a
              multifaceted approach where technical discovery is emphasized and
              functionality and aesthetic are in balance.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Out of the box
          <br />
          but never
          <br />
          out of touch."
        >
          <div className="accordion-inner">
            <p>
              I focus on bringing vision to reality. Think, do, try, repeat…
              There&apos;s no magic trick involved. I care about strategy just
              as much as I care about the craft. My process focuses on defining
              a clear goal and working relentlessly to reach it.
            </p>
          </div>
        </Accordion>
      </div>
    </S.Approach>
  )
}

export default Approach
