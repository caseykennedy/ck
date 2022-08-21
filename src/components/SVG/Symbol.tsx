import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill?: string }>``

type Props = { fill?: string }

const Symbol = ({ fill }: Props) => (
  <SVG
    width="32"
    viewBox="0 0 32 32"
    initial="hidden"
    animate="visible"
    fill="none"
  >
    <path
      d="M13.7451 3.67639L28.3248 18.3001"
      stroke={fill}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M3.64453 13.7097L18.382 28.4917"
      stroke={fill}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M28.3382 18.3581C28.9271 18.9455 29.1395 20.0104 28.7374 21.4544C28.3424 22.8734 27.3858 24.4949 25.9308 25.9463C24.4757 27.3976 22.85 28.3517 21.4275 28.7458C19.9797 29.1468 18.9122 28.935 18.3232 28.3475C17.7343 27.7601 17.5219 26.6953 17.924 25.2512C18.319 23.8323 19.2756 22.2107 20.7306 20.7594C22.1857 19.308 23.8114 18.3539 25.2339 17.9599C26.6817 17.5589 27.7492 17.7707 28.3382 18.3581Z"
      stroke={fill}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M13.6771 3.65278C14.266 4.24022 14.4783 5.30504 14.0763 6.74912C13.6813 8.16805 12.7247 9.78959 11.2696 11.2409C9.81459 12.6923 8.1889 13.6464 6.76634 14.0404C5.31856 14.4414 4.25102 14.2296 3.66208 13.6422C3.07314 13.0548 2.86081 11.99 3.26284 10.5459C3.65786 9.12694 4.61444 7.5054 6.0695 6.05405C7.52455 4.60271 9.15024 3.64857 10.5728 3.25455C12.0206 2.85355 13.0881 3.06535 13.6771 3.65278Z"
      stroke={fill}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </SVG>
)

export default Symbol

const defaultProps = {
  fill: 'var(--color-text)',
}

Symbol.defaultProps = defaultProps
