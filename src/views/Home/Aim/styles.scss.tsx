import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Aim = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  height: 75vh;
  padding: var(--gutter);

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
    justify-content: stretch;
  }

  .billboard {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    position: relative;

    h2 {
      max-width: 36ch;
      position: sticky;
      top: calc(var(--header-height) + calc(var(--gutter) + var(--space-xl)));
    }
  }

  .meta {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    position: relative;

    @media ${breakpoint.tablet} {
      flex-flow: row nowrap;
      justify-content: stretch;
    }

    & > * {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;
      justify-content: flex-end;
      text-align: right;
    }
  }
`

export default Aim
