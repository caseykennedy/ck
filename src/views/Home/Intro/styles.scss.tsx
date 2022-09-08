import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Intro = styled(motion.div)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  & > * {
    flex: 1;
  }
`

export default Intro
