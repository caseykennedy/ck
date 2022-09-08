// Projects:

import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Components
// import Icon from '../../../components/Icons'

// Hooks
import useProjects from '../../../hooks/useProjects'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const polyVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 3,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const staggerItems = {
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.5 },
  },
}

const Projects = () => {
  const projects = useProjects()
  console.log('projects:', projects)

  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.05,
  })
  useEffect(() => {
    const whenVisible = async () => {
      if (inView) {
        await controls.start('visible')
      }
    }
    whenVisible().catch(console.error)
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
          <motion.div variants={polyVariant} key={item.id} className="project">
            <Link to={`/projects/${item.slug}`}>
              <GatsbyImage
                image={item.cover.childImageSharp.gatsbyImageData}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="alt"
                className="project__figure"
              />
            </Link>
            <div className="project__meta">
              <div className="title">
                {item.year}
                <span>
                  <strong>{item.title}</strong>
                </span>
              </div>
              <ul>
                {item.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </S.Projects>
  )
}

export default Projects
