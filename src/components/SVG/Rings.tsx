import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

// ___________________________________________________________________

const animation = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
  },
  transition: {
    duration: 3,
    ease: 'easeOut',
  },
}

const SVG = styled(motion.svg)<{ fill: string }>`
  polygon {
    fill: ${(p) => p.fill};
  }
`

const Rings = () => (
  <SVG
    width="100%"
    viewBox="0 0 450 450"
    fill="none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.025,
      ease: 'easeInOut',
    }}
  >
    <motion.path
      {...animation}
      d="M225 449C348.712 449 449 348.712 449 225C449 101.288 348.712 1 225 1C101.288 1 1 101.288 1 225C1 348.712 101.288 449 225 449Z"
      stroke="#151216"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <motion.path
      {...animation}
      d="M225 386.823C314.373 386.823 386.823 314.373 386.823 225C386.823 135.628 314.373 63.1777 225 63.1777C135.628 63.1777 63.1777 135.628 63.1777 225C63.1777 314.373 135.628 386.823 225 386.823Z"
      stroke="#151216"
      strokeWidth="3"
      strokeMiterlimit="10"
    />
    <motion.path
      {...animation}
      d="M224.999 324.645C280.032 324.645 324.645 280.032 324.645 224.999C324.645 169.966 280.032 125.354 224.999 125.354C169.966 125.354 125.354 169.966 125.354 224.999C125.354 280.032 169.966 324.645 224.999 324.645Z"
      stroke="#151216"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
  </SVG>
)

export default Rings
