// Sites:

import React, { useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Components
// import Icon from '../../../components/Icons'

// Hooks
import useSites from '../../../hooks/useSites'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -1000 },
    },
  },
  closed: {
    x: 25,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
}

const staggerItems = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.175, delayChildren: 0.175 },
  },
  hidden: {
    opacity: 0,
    transition: { staggerChildren: 0.175, delayChildren: 0.175 },
  },
}

const Sites = () => {
  const sites = useSites()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.25,
  })

  useEffect(() => {
    const isVisible = async () => {
      if (inView) {
        await controls.start('visible')
      }
    }
    isVisible().catch(console.error)
  }, [controls, inView])

  return (
    <S.Sites>
      <div className="site-list">
        {sites.map(({ client, cover, url, year }) => {
          console.log('cover', cover)
          return (
            <a href="/" target="_blank" rel="noreferrer">
              <motion.div
                initial={['closed']}
                whileHover={['open']}
                animate={['closed']}
                key={url}
                className="site-list__row"
              >
                <div className="site-list__meta">
                  <div className="name">
                    {/* {year} */}
                    <span>
                      <strong>{client}</strong>
                    </span>
                  </div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="site-list__figure"
                >
                  <GatsbyImage
                    image={cover.childImageSharp.gatsbyImageData}
                    alt={client}
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                </motion.div>
              </motion.div>
            </a>
          )
        })}
      </div>
    </S.Sites>
  )
}

export default Sites
