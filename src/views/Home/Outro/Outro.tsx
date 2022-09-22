// Outro:

import * as React from 'react'
import { motion } from 'framer-motion'

// Components
import Icon from '../../../components/Icons'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Outro = () => {
  const nevadaTime = useDate()
  return (
    <S.Outro>
      <div className="billboard">
        <div>
          <h2>
            If you would like to discuss a project or idea, please get in touch.
          </h2>
        </div>
      </div>
      <div className="meta">
        <h4>contact</h4>
        <br />
        <a href="/" target="_blank" rel="noopener">
          me@caseykennedy.me
        </a>
      </div>
      <div className="meta">
        <h4>social</h4>
        <br />
        <a href="/" target="_blank" rel="noopener">
          GitHub
        </a>
        <a href="/" target="_blank" rel="noopener">
          Dribbble
        </a>
        <a href="/" target="_blank" rel="noopener">
          LinkedIn
        </a>
      </div>
    </S.Outro>
  )
}

export default Outro
