// Projects:

import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// types
import { ProjectShapeProject } from '../../../types'

// Components
// import Icon from '../../../components/Icons'

// Hooks
import useProjects from '../../../hooks/useProjects'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const imageVariants = {
  large: {
    y: 0,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
  small: {
    y: -11,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.03 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const polyVariant = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  hidden: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const staggerItems = {
  visible: {
    transition: { staggerChildren: 0.175, delayChildren: 0.175 },
  },
}

const Projects = () => {
  const projects = useProjects()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.05,
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
    <S.Projects
      animate={controls}
      initial="hidden"
      variants={staggerItems}
      ref={ref}
    >
      <div className="project-grid">
        {projects.map(({ node: item }) => (
          <motion.div
            variants={polyVariant}
            initial={['closed', 'large']}
            whileHover={['open', 'small']}
            animate={['closed', 'large']}
            key={item.id}
            className="project"
          >
            <Link to={`/projects/${item.slug}`}>
              <motion.div variants={imageVariants}>
                <GatsbyImage
                  image={item.cover.childImageSharp.gatsbyImageData}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="alt"
                  className="project__figure"
                />
              </motion.div>
            </Link>
            <div className="project__meta">
              <div className="title">
                {/* {item.year} */}
                <span>
                  <strong>{item.title}</strong>
                </span>
              </div>
              <motion.ul variants={listVariants}>
                {item.services.map((service, idx) => (
                  <motion.li variants={itemVariants} key={idx}>
                    {service}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </div>
    </S.Projects>
  )
}

export default Projects
