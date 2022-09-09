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
    --icon-size: 1.25rem;

    // Radius
    --radius: 1rem; // border radius base size
    --radius-xs: calc(var(--radius) / 3);
    --radius-sm: calc(var(--radius) / 2);
    --radius-md: calc(var(--radius) * 2);
    --radius-lg: calc(var(--radius) * 4);
    --radius-full: 50%;

    // transitions
    --transition: 0.175s ease;
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
    // font-family: 'fontName';
    height: var(--icon-xs);
    width: var(--icon-xs);
  }
`

export default Theme
