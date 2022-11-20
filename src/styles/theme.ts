// Theme
// ___________________________________________________________________

import { css } from 'styled-components'
import breakpoint from '../utils/breakpoint'

// ___________________________________________________________________

const Theme = css`
  :root {
    // Border
    --border: 1px solid var(--color-border);

    // Header
    --header-height: 44px;

    // Icons
    --icon-size: 0.875rem;

    // Radius
    --radius: 0.75rem; // border radius base size
    --radius-xs: calc(var(--radius) / 3);
    --radius-sm: calc(var(--radius) / 2);
    --radius-md: calc(var(--radius) * 2);
    --radius-lg: calc(var(--radius) * 4);
    --radius-full: 50%;

    // transitions
    --transition: 0.275s ease;
    --transition-all: all var(--transition);

    @media ${breakpoint.tablet} {
    }
  }

  /* @supports (--css: variables) {
    @media ${breakpoint.tablet} {
      :root,
      * {
      }
    }
  } */

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--icon-size);
    width: var(--icon-size);
  }
`

export default Theme
