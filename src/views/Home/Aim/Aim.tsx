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

const Aim = () => (
  <S.Aim>
    <div className="billboard">
      <h2>
        My aim is to build lasting products and positively impact others through
        creative experience.
      </h2>
    </div>
    <div className="meta">
      <div>
        <h4>capabilities</h4>
        <br />
        web + app development
        <br />
        ui + ux
        <br />
        design systems
        <br />
        visual design
        <br />
        prototyping
        <br />
        logo identity
        <br />
        packaging
        <br />
        events + festivals
      </div>
      <div>
        <h4>tech</h4>
        <br />
        react / vue
        <br />
        web3 / crypto
        <br />
        gatsby / next / nuxt
        <br />
        javascript (ts)
        <br />
        html + css
        <br />
        graphQL
        <br />
        shopify
        <br />
        headless
      </div>
    </div>
  </S.Aim>
)

export default Aim
