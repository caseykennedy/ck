// Mobile Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoint from '../../../utils/breakpoint'

// Begin Styles
// ___________________________________________________________________

export const Overlay = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  background: var(--color-bg-blur);
  margin: 0;
  padding-top: calc(var(--gutter) + var(--header-height));
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

    margin: 0;
    padding: var(--gutter);
    width: 100%;

    overflow-y: auto;

    div {
      flex: 1;
      font-size: var(--text-lg);
    }
  }
`

export default Overlay
