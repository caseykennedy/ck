import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Outro = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  height: 50vh;
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

    & > * {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      /* &:first-child {
        border-bottom: var(--border);
      } */
    }
  }

  .meta {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: right;
  }
`

export default Outro
