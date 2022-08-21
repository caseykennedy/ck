// Global styles
// ___________________________________________________________________

import { createGlobalStyle } from 'styled-components'

import Reset from './reset'
import Colors from './colors'
import Spacing from './spacing'
import Theme from './theme'
import Typography from './typography'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Colors}
  ${Spacing}
  ${Typography}
  ${Theme}

  html,
  body {
    background: var(--color-bg);
  }

  body {
    overscroll-behavior-y: none;
  }

  .scroll-container {
    width: 100%;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  /* ::-webkit-scrollbar {
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
  }

  ::-webkit-scrollbar-thumb:hover {
  } */
`

export default GlobalStyles
