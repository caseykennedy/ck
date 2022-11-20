import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Intro = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;

  h2 {
    margin-bottom: var(--space-xxxl);
  }

  .intro__layout {
    display: flex;
    flex-flow: column nowrap;
    min-height: 70vh;

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
        max-inline-size: 48ch;
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

        &:last-child {
          margin-top: var(--space-md);
        }

        @media ${breakpoint.tablet} {
          margin-top: 0;
        }
      }
    }
  }
`

export default Intro
