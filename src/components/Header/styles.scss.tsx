// Header Styles:

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Header = styled.header`
  background: var(--color-bg);
  box-shadow: 0px 15px 30px 10px var(--color-bg);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  padding: var(--gutter);
  height: var(--header-height);
  width: 100%;
  z-index: 9;

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .utils {
    display: flex;
    align-items: center;
    gap: var(--gutter);

    button {
      display: flex;
      place-content: center;
      padding: 0;
      background-color: transparent;
      border: none;
      color: var(--color-text);
      cursor: pointer;
      transition: color var(--transition);

      &:hover {
        color: var(--color-text-muted);
      }
    }

    .theme-toggle {
      font-size: 1.5rem;
    }
  }
`

export default Header
