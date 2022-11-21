// Global styles
// ___________________________________________________________________

import { createGlobalStyle } from 'styled-components'

import Reset from './reset'
import Buttons from './buttons'
import Colors from './colors'
import Spacing from './spacing'
import Theme from './theme'
import Typography from './typography'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Buttons}
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

  ::-webkit-scrollbar {
    display: none;
  }

  /* ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
  }

  ::-webkit-scrollbar-thumb:hover {
  } */

  .n-resize        { cursor: n-resize; }
  .e-resize        { cursor: e-resize; }
  .s-resize        { cursor: s-resize; }
  .w-resize        { cursor: w-resize; }
  .ns-resize       { cursor: ns-resize; }
  .ew-resize       { cursor: ew-resize; }
  .ne-resize       { cursor: ne-resize; }
  .nw-resize       { cursor: nw-resize; }
  .se-resize       { cursor: se-resize; }
  .sw-resize       { cursor: sw-resize; }
  .nesw-resize     { cursor: nesw-resize; }
  .nwse-resize     { cursor: nwse-resize; }
`

export default GlobalStyles
