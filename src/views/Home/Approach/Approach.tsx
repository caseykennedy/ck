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
              {/* Design is much more than what you see. It is product whole vision
              from the start. My practice is based on a multifaceted approach
              where discovery is emphasized and functionality and aesthetic are
              in balance. */}
              I believe that design is much more than what you see, it is
              product whole vision from the start. My practice is based on a
              design-first approach—where research and discovery are just as
              important as functionality and aesthetic.
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
              Creative collaboration is the foundation of my pursuit. It&apos;s
              also at the core of my relationship with my clients. I collaborate
              with a range of folks that recognize the value of design and I
              continue to work alongside them as they grow.
            </p>
          </div>
        </Accordion>
      </div>
    </S.Approach>
  )
}

export default Approach
