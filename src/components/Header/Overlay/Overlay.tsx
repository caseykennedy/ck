/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// MobileNav:
// ___________________________________________________________________

import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import HoverEffect from 'hover-effect'

import { polyVariant, staggerItems } from '../../../utils/variants'

import Accordion from '../../Accordion'

import * as S from './styles.scss'

import img1 from './sugar.jpg'
import img2 from './share-card.png'

// ___________________________________________________________________

type NavProps = {
  handleExitOnClick: () => void
  isOpen: boolean
}

const Overlay = ({ handleExitOnClick, isOpen }: NavProps) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const distort = new HoverEffect({
      parent: document.querySelector('.figuree'),
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
              Not your standard developer, I have a background in design and
              have made my way through a broad range of industries including
              DNS, domain registration, marketing, gaming and hospitality, and
              entertainment—my current focus includes web3, frontend and visual
              design.
            </motion.p>
            <motion.div variants={polyVariant}>
              <Accordion
                title="
                  harmonic design
                  <br />
                  approach"
              >
                <div className="accordion-inner">
                  <p>
                    {/* Design is much more than what you see. It is product whole vision
              from the start. My practice is based on a multifaceted approach
              where discovery is emphasized and functionality and aesthetic are
              in balance. */}
                    Design is much more than what you see, it is informed
                    harmonic balance. My practice is based on a design-first
                    approach—where research and discovery is just as important
                    as functionality and aesthetic.
                  </p>
                </div>
              </Accordion>
            </motion.div>
            <motion.div variants={polyVariant}>
              <Accordion
                title="out of the box,
                    <br />
                    never out of touch"
              >
                <div className="accordion-inner">
                  <p>
                    Creative collaboration is the foundation of my pursuit.
                    It&apos;s also at the core of my relationship with my
                    clients. I collaborate with a range of folks that recognize
                    the value of design and I continue to work alongside them as
                    they grow.
                  </p>
                </div>
              </Accordion>
            </motion.div>
            {/* <motion.div variants={polyVariant}>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className="link e-resize text-xl"
              >
                me@caseykennedy.me
              </a>
            </motion.div> */}
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
          <motion.div variants={polyVariant} className="list list__border">
            <h4>employment</h4>
            <div>
              <ul>
                <li>
                  simple media <span>06-07</span>
                </li>
                <li>
                  medium advertising <span>07-09</span>
                </li>
                <li>
                  atlantis casino resort spa <span>09-12</span>
                </li>
                <li>
                  noip.com <span>12-16</span>
                </li>
                <li>
                  spheric agency <span>16-17</span>
                </li>
                <li className="current">
                  freelance <span>current</span>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div variants={polyVariant} className="list">
            <h4>notable clients</h4>
            <div>
              <ul>
                <li>dWeb Foundation</li>
                <li>enCirca</li>
                <li>VESL Token</li>
                <li>Fidira</li>
                <li>Commence Studio</li>
                <li>noip.com</li>
                {/* <li>Blackbird Logistics</li> */}
                <li>Fresh Bakin&apos; Music Events</li>
                {/* <li>Jimmy Beans Wool</li> */}
                <li>eOn</li>
                <li>Eight Sleep Mattresses</li>
                {/* <li>Bike Habitat</li> */}
                <li>Orthopaedic Implant Co.</li>
                <li>Bottle Barn</li>
                {/* <li>Cahuilla Casino Resort</li> */}
                <li>The Life Change Center</li>
              </ul>
            </div>
          </motion.div>
          <motion.div variants={polyVariant} className="list">
            <h4>capabilities</h4>
            <div>
              <ul>
                <li>web / app development</li>
                <li>web3 / dapp</li>
                <li>eCommerce</li>
                <li>CMS integration</li>
                <li>API integration</li>
              </ul>

              <ul>
                <li>design systems</li>
                <li>information architecture</li>
                <li>ui / ux</li>
                <li>product / visual design</li>
                <li>wireframing / prototyping</li>
                <li>user journey mapping</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="figure">
          {/* <div className="figure" /> */}
          <motion.div variants={polyVariant}>
            <StaticImage
              src="../../../../static/sugar.jpg"
              alt="casey kennedy headshot"
              placeholder="blurred"
              objectFit="cover"
              // aspectRatio={1}
              quality={60}
            />
          </motion.div>
        </div>
      </S.Overlay>
    </motion.div>
  )
}

export default Overlay
