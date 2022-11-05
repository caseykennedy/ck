// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='darkMode'] {
    // base
    --color-black: hsl(0, 0%, 0%);
    --color-white: hsl(0, 0%, 100%);

    // background
    --color-bg: hsl(240, 5%, 5%);
    --color-bg-dark: hsl(240, 4%, 5%);
    // typography
    --color-text: hsl(245, 8%, 78%);
    --color-text-muted: hsl(245, 8%, 58%);
    --color-heading: hsl(245, 8%, 92%);
    // border
    --color-border: hsl(240, 5%, 16%);
  }

  [data-theme='lightMode'] {
    --color-black: hsl(0, 0%, 100%);
    --color-white: hsl(0, 0%, 0%);

    // background
    --color-bg: hsl(0, 0%, 100%);
    // typography
    --color-text: hsl(270, 5%, 10%);
    --color-text-muted: hsl(270, 5%, 40%);
    --color-heading: hsl(0, 0%, 0%);
  }
`

export default Colors
