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
    --color-gray: gray;

    --color-primary: #BCB2D7;
    --color-secondary: #CCC5B3;
    --color-tertiary: #BBE7E3;
    --color-quaternary: #FAC6B2;
    --color-quintary: #8C7746;

    // background
    --color-bg: #151216;
    // typography
    --color-text: #d4d2d6;
    --color-text-muted: #9692A0;
    // border
    --color-border: #322E3C;
  }

  /* [data-theme='darkMode'] {
  } */
`

export default Colors
