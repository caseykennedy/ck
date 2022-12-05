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
    /* overscroll-behavior-y: none; */
  }

  /* .scroll-container {
    width: 100%;
  } */

  .img {
    width: 100%;
    height: 100%;
  }

  ::-webkit-scrollbar {
    /* display: none; */
    width: 0;
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

  .noise:before {
    content: "";
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    width: auto;
    height: auto;
    position: fixed;
    z-index: 10;
    background-position: 50%;
    pointer-events: none;
    animation: grain 1s steps(6) infinite;
    background-image: url(//res.cloudinary.com/crunchdao/image/upload/v1658148613/250-100-12_syxynz.png);
    opacity: 0.5;
  }

  @keyframes grain {
    0%, to {
      transform: translate(0)
    }

    10% {
      transform: translate(-5%, -10%)
    }

    30% {
      transform: translate(3%, -15%)
    }

    50% {
      transform: translate(12%, 9%)
    }

    70% {
      transform: translate(9%, 4%)
    }

    90% {
      transform: translate(-1%, 7%)
    }
  }
`

export default GlobalStyles
