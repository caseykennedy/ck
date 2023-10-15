// Header Styles:

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Header = styled.header`
  /* backdrop-filter: blur(7px); */
  background: var(--color-bg);
  box-shadow: 0px 5px 20px 10px var(--color-bg);
  /* border-bottom: var(--border); */

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  padding: var(--gutter);
  height: var(--header-height);
  width: 100%;
  z-index: 9999;

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: var(--color-text);

      &:hover {
        color: var(--color-text-muted);
      }
    }
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

      &__info-toggle {
        cursor: help;

        &:hover {
          color: var(--color-text);
          text-decoration: underline;
        }
      }

      &__theme-toggle {
        font-size: 1.5rem;
        transform: rotate(180deg);
        transition: 0.333s ease-in-out 0s;

        &__active {
          transform: rotate(0deg);
        }
      }
    }
  }
`

export default Header
