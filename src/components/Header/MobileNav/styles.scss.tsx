// Mobile Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoint from '../../../utils/breakpoint'

// Begin Styles
// ___________________________________________________________________

export const MobileNav = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  /* padding: calc(var(--space-xxxxl) * 2); */
  height: 100vh;
  width: 100vw;

  .exit {
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
  }

  .content {
    display: flex;
    flex-flow: column nowrap;
    backdrop-filter: blur(5px);
    background: var(--color-bg-dark);
    border: var(--border);
    border-radius: var(--radius-xs);
    opacity: 0.875;
    margin: 0;
    padding: var(--gutter);
    height: 92vh;
    width: 92vw;

    @media ${breakpoint.tablet} {
      padding: var(--gutter);
      height: 75vh;
      width: 75vw;
    }

    div {
      flex: 1;
      display: flex;
      font-size: var(--text-lg);
    }
  }
`

export const NavLink = styled(motion.li)`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;

  @media ${breakpoint.tablet} {
    padding: 0;
  }

  a {
    color: var(--color-text);
    font-size: var(--text-lg);
    text-decoration: none;
    width: 100%;

    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }
`
