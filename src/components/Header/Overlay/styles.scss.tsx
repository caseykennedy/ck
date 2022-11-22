// Mobile Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoint from '../../../utils/breakpoint'

// Begin Styles
// ___________________________________________________________________

export const Overlay = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--space-xl);

  margin: 0;
  overflow: auto;
  padding: var(--gutter);
  padding-top: calc(var(--space-lg) + var(--header-height));
  min-height: 100vh;
  width: 100vw;

  background: var(--color-bg-blur);

  & > * {
    flex: 1;
  }

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  .bio {
    flex: 2;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    .lead {
      margin-bottom: var(--space-xxl);
    }
  }

  .list {
    margin-bottom: var(--space-xl);

    h4 {
      margin-bottom: var(--gutter);
    }

    div {
      display: flex;
      flex-flow: row nowrap;
      gap: var(--gutter);
    }

    ul {
      color: var(--color-text-muted);

      li {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        &.current {
          color: var(--color-text);
        }
      }
    }

    &__border {
      ul {
        width: 100%;

        li {
          border-bottom: var(--border);
          padding: var(--space-xs) 0;
        }
      }
    }
  }

  .info {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    @media ${breakpoint.tablet} {
      flex: 1.25;
      padding-right: var(--space-xxxxl);
    }

    @media ${breakpoint.desktop} {
      flex: 2;
      padding-right: var(--space-xxxxl);
    }
  }

  .figure {
    flex: 1;
  }

  /* .exit {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    background-color: transparent;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    transition: color var(--transition);

    &:hover {
      color: var(--color-text-muted);
    }
  } */
`

export default Overlay
