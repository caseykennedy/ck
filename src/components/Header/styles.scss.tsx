// Header Styles:

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Header = styled.header`
  background: var(--color-bg);
  border-bottom: var(--border);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  
  position: sticky;
  top: 0;
  
  padding: 0 var(--gutter);
  height: var(--header-width);
  width: 100%;
  z-index: 9999;

  @media ${breakpoint.tablet} {
    border-right: var(--border);
    border-bottom: none;
    flex-flow: column nowrap;
    padding: var(--gutter) 0;
    height: 100vh;
    width: var(--header-width);
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${breakpoint.tablet} {
      flex-flow: column nowrap;
    }

    .symbol {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .marquee {
    font-family: var(--font-sans);
    font-weight: 600;
    position: relative;

    @media ${breakpoint.tablet} {
      transform-origin: center center;
      transform: rotate(-90deg);
    }
  }

  .twitter {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: inherit;

  .wordmark {
    transform-origin: center center;
    transform: rotate(90deg);
    /* transform-origin: 50%; */
  }
`
