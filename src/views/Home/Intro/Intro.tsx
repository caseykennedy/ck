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
      <h2>Info</h2>
      <div className="intro__layout">
        <div className="billboard">
          <h2>
            Not your standard web developer—Casey has a background in design and has made his way through a
            broad range of industries including DNS, domain registration,
            marketing, gaming and hospitality, and entertainment—his current
            focus includes web3, frontend and visual design.
          </h2>
        </div>
        <div className="meta">
          <div>
            <h4>capabilities</h4>
            <br />
            web / app development
            <br />
            ui+ux
            <br />
            design systems
            <br />
            eCommerce
            <br />
            visual design
            <br />
            wireframing / prototyping
            <br />
            logo identity
          </div>
          <div>
            <h4>expertise</h4>
            <br />
            react / redux
            <br />
            gatsby / next
            <br />
            vue / nuxt
            <br />
            web3 / ethers
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
      </div>
    </S.Intro>
  )
}

export default Intro
