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
          Not your ordinary front-end developer—I come with a background in visual design
          and have made my way through a broad range of industries throughout my
          career. Some of these include ad agencies, DNS companies, registrars,
          casino&apos;s, print shops and music events where deliverables ranged
          from posters and stationery to websites and mobile apps.
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
