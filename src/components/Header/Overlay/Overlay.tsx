/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// MobileNav:
// ___________________________________________________________________

import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import HoverEffect from 'hover-effect'

// styles
import * as S from './styles.scss'

// utils
import { polyVariant, staggerItems } from '../../../utils/variants'

// hooks
import useInfo from '../../../hooks/useInfo'

// components
import Accordion from '../../Accordion'
import img1 from '../../../images/sugar.jpg'
import img2 from '../../../images/cream.jpg'

// ___________________________________________________________________

type EmploymentProps = {
  stats: {
    current: boolean
    employer: string
    end: string
    start: string
  }[]
}

const Employment = ({ stats }: EmploymentProps) => (
  <S.List>
    {stats.map((stat, idx) => (
      <li key={idx} className={`has-border ${stat.current && 'is-current'}`}>
        {stat.employer}
        <span>{stat.current ? 'current' : `${stat.start} - ${stat.end}`}</span>
      </li>
    ))}
  </S.List>
)

type ListProps = {
  list: string[]
}

const List = ({ list }: ListProps) => (
  <S.List>
    {list.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </S.List>
)

type OverlayProps = {
  handleExitOnClick: () => void
  isOpen: boolean
}

const Overlay = ({ handleExitOnClick, isOpen }: OverlayProps) => {
  const info = useInfo()
  console.log('info: ', info)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const distort = new HoverEffect({
      parent: document.querySelector('.figure'),
      intensity: 0.3,
      image1: img1,
      image2: img2,
      displacementImage:
        'https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true',
    })
  }, [])
  return (
    <motion.div initial="hidden" animate={isOpen ? 'visible' : 'hidden'}>
      <S.Overlay variants={staggerItems}>
        <div className="bio">
          <div>
            <motion.p variants={polyVariant} className="lead">
              {info.bio}
            </motion.p>
            <motion.div variants={polyVariant}>
              <Accordion title={info.approach.headline}>
                <div className="accordion-inner">
                  <p style={{ paddingBottom: 'var(--gutter)' }}>
                    {/* Design is much more than what you see. It is product whole vision
              from the start. My practice is based on a multifaceted approach
              where discovery is emphasized and functionality and aesthetic are
              in balance. */}
                    {info.approach.message}
                  </p>
                </div>
              </Accordion>
            </motion.div>
            <motion.div variants={polyVariant}>
              <Accordion title={info.process.headline}>
                <div className="accordion-inner">
                  <p style={{ paddingBottom: 'var(--gutter)' }}>
                    {info.process.message}
                  </p>
                </div>
              </Accordion>
            </motion.div>
          </div>
          {/* <motion.div variants={polyVariant} className="list">
          <h4>capabilities</h4>
          <div>
            <ul>
              <li>web development</li>
              <li>web3 / dapp</li>
              <li>eCommerce</li>
              <li>CMS integration</li>
              <li>API integration</li>
            </ul>

            <ul>
              <li>design systems</li>
              <li>information architecture</li>
              <li>ui+ux</li>
              <li>product design</li>
              <li>wireframing / prototyping</li>
              <li>user journey mapping</li>
            </ul>
          </div>
        </motion.div> */}
        </div>

        <div>
          <motion.div variants={polyVariant} className="list">
            <h4>employment</h4>
            <div>
              <Employment stats={info.stats.employment} />
            </div>
          </motion.div>
          <motion.div variants={polyVariant} className="list">
            <h4>notable clients</h4>
            <div>
              <List list={info.stats.clients} />
            </div>
          </motion.div>
          <motion.div variants={polyVariant} className="list">
            <h4>capabilities</h4>
            <div>
              <List list={info.stats.capabilities.development} />
              <List list={info.stats.capabilities.design} />
            </div>
          </motion.div>
        </div>

        <div className="figure">
          {/* <div className="figure" /> */}
          {/* <motion.div variants={polyVariant}>
            <StaticImage
              src="../../../../static/sugar.jpg"
              alt="casey kennedy headshot"
              placeholder="blurred"
              objectFit="cover"
              // aspectRatio={1}
              quality={60}
            />
          </motion.div> */}
        </div>
        <S.Email variants={polyVariant}>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className="link e-resize text-xl"
          >
            me@caseykennedy.me
          </a>
        </S.Email>
      </S.Overlay>
    </motion.div>
  )
}

export default Overlay
