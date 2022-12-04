/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// MobileNav:
// ___________________________________________________________________

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import HoverEffect from 'hover-effect'

// styles
import * as S from './styles.scss'

// utils
import { polyVariant, staggerItems } from '../../../utils/variants'

// hooks
import useInfo from '../../../hooks/useInfo'
import useSiteSettings from '../../../hooks/useSiteSettings'

// components
import Accordion from '../../Accordion'
import distortion from '../../../images/4.png'

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
  const site = useSiteSettings()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const distort = new HoverEffect({
      parent: document.querySelector('.figure'),
      intensity: 0.3,
      image1: info.figure.image1.childImageSharp.fluid.src,
      image2: info.figure.image4.childImageSharp.fluid.src,
      displacementImage: distortion,
      imagesRatio: 800 / 600,
    })
  }, [
    info.figure.image1.childImageSharp.fluid.src,
    info.figure.image4.childImageSharp.fluid.src,
  ])
  return (
    <motion.div initial="hidden" animate={isOpen ? 'visible' : 'hidden'}>
      <S.Overlay variants={staggerItems}>
        <div className="bio">
          {info.bio.map((para, idx) => (
            <motion.p variants={polyVariant} key={idx} className="lead">
              {para}
            </motion.p>
          ))}

          <div className="bio__detail">
            <motion.div variants={polyVariant}>
              <Accordion title={info.approach.headline}>
                <div className="accordion-inner">
                  <p style={{ paddingBottom: 'var(--gutter)' }}>
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
        </div>

        <div>
          <motion.div variants={polyVariant} className="list">
            <h4>Employment</h4>
            <div>
              <Employment stats={info.stats.employment} />
            </div>
          </motion.div>
          <motion.div variants={polyVariant} className="list">
            <h4>Notable clients</h4>
            <div>
              <List list={info.stats.clients} />
            </div>
          </motion.div>
          <motion.div variants={polyVariant} className="list">
            <h4>Capabilities</h4>
            <div>
              <List list={info.stats.capabilities.development} />
              <List list={info.stats.capabilities.design} />
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div variants={polyVariant}>
            <div className="figure" />
          </motion.div>
        </div>
        <S.Email variants={polyVariant}>
          <a
            href={site.mailTo}
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
