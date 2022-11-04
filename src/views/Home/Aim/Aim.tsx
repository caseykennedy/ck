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
      <h2>I aim to combine function with aesthetic for a fluid experience.</h2>
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
        web3 / ethers
        <br />
        gatsby / next
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
        <br />
        etc...
      </div>
    </div>
  </S.Aim>
)

export default Aim
