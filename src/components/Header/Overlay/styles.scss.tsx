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
  gap: var(--gutter);

  box-sizing: border-box;
  margin: 0;
  /* overflow: auto; */
  padding: var(--gutter);
  padding-top: calc(var(--space-xl) + var(--header-height));
  width: 100%;

  & > * {
    flex: 1;
  }

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
    /* min-height: 100vh; */
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
    margin-bottom: var(--space-xxl);

    h4 {
      margin-bottom: var(--gutter);
    }

    div {
      display: flex;
      flex-flow: row nowrap;
      gap: var(--gutter);
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
    height: 444px;
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

export const List = styled.ul`
  color: var(--color-text-muted);
  width: 100%;

  li {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    &.has-border {
      border-bottom: var(--border);
      padding: var(--space-xxs) 0;
    }

    &.is-current {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      color: var(--color-text);
    }
  }
`

export const Email = styled(motion.div)`
  backdrop-filter: blur(7px);
  background: var(--color-bg);
  border: var(--border);
  border-radius: var(--radius);
  
  padding: var(--gutter);
  position: fixed;
  bottom: var(--gutter);
  /* width: calc(100% - var(--space-lg)); */
`

export default Overlay
