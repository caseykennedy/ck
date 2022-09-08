// Spacing
// ___________________________________________________________________

import { css } from 'styled-components'
import breakpoint from '../utils/breakpoint'

// ___________________________________________________________________

const Spacing = css`
  // --------------------------------
  // Spacing
  // --------------------------------

  :root {
    --space-unit: 1rem;
    --gutter: var(--space-sm);

    @media ${breakpoint.tablet} {
      /* --gutter: var(--space-xl); */
    }
  }

  :root,
  * {
    --space-xxxxs: calc(0.177 * var(--space-unit));
    --space-xxxs: calc(0.25 * var(--space-unit));
    --space-xxs: calc(0.354 * var(--space-unit));
    --space-xs: calc(0.5 * var(--space-unit));
    --space-sm: calc(0.707 * var(--space-unit));
    --space-md: calc(1 * var(--space-unit));
    --space-lg: calc(1.414 * var(--space-unit));
    --space-xl: calc(1.999 * var(--space-unit));
    --space-xxl: calc(2.827 * var(--space-unit));
    --space-xxxl: calc(3.998 * var(--space-unit));
    --space-xxxxl: calc(5.65 * var(--space-unit));
    --component-padding: var(--space-md);
  }

  @supports (--css: variables) {
    @media ${breakpoint.tablet} {
      :root,
      * {
        --space-xxxxs: calc(0.237 * var(--space-unit));
        --space-xxxs: calc(0.316 * var(--space-unit));
        --space-xxs: calc(0.422 * var(--space-unit));
        --space-xs: calc(0.563 * var(--space-unit));
        --space-sm: calc(0.75 * var(--space-unit));
        --space-md: calc(1 * var(--space-unit));
        --space-lg: calc(1.333 * var(--space-unit));
        --space-xl: calc(1.777 * var(--space-unit));
        --space-xxl: calc(2.369 * var(--space-unit));
        --space-xxxl: calc(3.157 * var(--space-unit));
        --space-xxxxl: calc(4.21 * var(--space-unit));
      }
    }
  }
`

export default Spacing
