// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='default'] {
    // base
    --color-black: hsl(0, 0%, 0%);
    --color-white: hsl(0, 0%, 100%);

    // background
    --color-bg: hsl(0, 0%, 0%);
    // typography
    --color-text: hsl(270, 5%, 80%);
    --color-text-muted: hsl(270, 5%, 60%);
    --color-heading: hsl(270, 5%, 94%);
    // border
    --color-border: var(--color-white);
  }

  [data-theme='lightMode'] {
    --color-black: hsl(0, 0%, 100%);
    --color-white: hsl(0, 0%, 0%);

    // background
    --color-bg: hsl(0, 0%, 100%);
    // typography
    --color-text: hsl(270, 5%, 20%);
    --color-text-muted: hsl(270, 5%, 40%);
    --color-heading: hsl(0, 0%, 0%);
  }
`

export default Colors
