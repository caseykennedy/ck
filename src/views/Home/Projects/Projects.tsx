// Projects:

import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import HoverEffect from 'hover-effect'

// Hooks
import useProjects from '../../../hooks/useProjects'

// Components
import Icon from '../../../components/Icons'

// Styles
import * as S from './styles.scss'

import distortion from '../../../images/4.png'

// ___________________________________________________________________

const imageVariants = {
  large: {
    scale: 1.0575,
    transition: {
      scale: {
        stiffness: 400,
        velocity: -400,
        duration: 0.65,
        ease: 'easeOut',
      },
    },
  },
  small: {
    scale: 1,
    transition: {
      transform: {
        stiffness: 400,
        velocity: -400,
        duration: 0.55,
        ease: 'easeOut',
      },
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

const arrowVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
  closed: {
    x: -25,
    opacity: 0,
    transition: {
      x: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
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

// type FigureProps = {
//   image1: string
//   image2: string
//   selector: string
// }

// const Figure = ({ image1, image2, selector }: FigureProps) => {
//   useEffect(() => {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
//     const distort = new HoverEffect({
//       parent: document.querySelector(`.${selector}`),
//       intensity: 0.3,
//       image1,
//       image2,
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//       displacementImage: distortion,
//       imagesRatio: 800 / 600,
//     })
//   }, [image1, image2, selector])
//   return <div style={{ height: '100%' }} className={selector} />
// }

const Projects = () => {
  const projects = useProjects()
  console.log('projects', projects)

  return (
    <S.Projects>
      {projects.map(({ node: item }) => (
        <Link to={`/projects/${item.slug}`} key={item.id}>
          <motion.div
            initial="closed"
            whileHover="open"
            animate="closed"
            className="project"
          >
            <div className="project__figure">
              <motion.div
                variants={imageVariants}
                initial="small"
                whileHover="large"
                animate="small"
              >
                <GatsbyImage
                  image={item.cover.childImageSharp.gatsbyImageData}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="alt"
                />
                {/* <div className={item.slug}>
                  <Figure
                    image1={item.cover.childImageSharp.fluid.src}
                    image2={item.cover.childImageSharp.fluid.src}
                    selector={item.slug}
                  />
                </div> */}
              </motion.div>
            </div>

            <motion.div className="project__details">
              <div className="title">
                <div>
                  <div className="title__client">{item.client}</div>
                  <div className="title__tagline">{item.tagline}</div>
                </div>
                <motion.ul variants={listVariants}>
                  {item.services.map((service, idx) => (
                    <motion.li variants={itemVariants} key={idx}>
                      {service}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="excerpt">
                {item.desc.slice(0, 1).map((para, idx) => (
                  <div key={idx} className="excerpt__desc">
                    {para}
                  </div>
                ))}
                <motion.div variants={arrowVariants} className="excerpt__icon">
                  <Icon name="arrow" className="icon" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </Link>
      ))}
    </S.Projects>
  )
}

export default Projects
