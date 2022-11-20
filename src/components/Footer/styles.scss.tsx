// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  border-top: var(--border);

  position: relative;
  z-index: 1;

  .contact {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    padding: var(--gutter);
    padding-bottom: var(--space-xxxxl);

    /* background: var(--color-bg);
    background: linear-gradient(
      0deg,
      var(--color-bg-light) -20%,
      rgba(0, 0, 0, 0) 13%
    ); */

    @media ${breakpoint.tablet} {
      flex-flow: row nowrap;
    }

    & > * {
      flex: 1;
    }

    &__cta {
      flex: 2;

      h2 {
        margin-bottom: var(--space-lg);
      }
    }

    &__details {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      text-align: right;

      @media ${breakpoint.tablet} {
        justify-content: flex-start;
      }

      div {
        &:first-child {
          margin-bottom: var(--gutter);
        }
      }

      span {
        color: var(--color-text-muted);
      }
    }

    .btn {
      svg {
        transform: rotate(-90deg);
        /* width: 18px; */
      }
    }
  }

  .utils {
    display: flex;
    flex-flow: row-reverse nowrap;
    align-items: center;
    justify-content: space-between;
    padding: var(--gutter);
    /* padding-bottom: var(--space-xl); */

    @media ${breakpoint.tablet} {
      /* padding-bottom: var(--space-xxl); */
    }

    .control {
      color: var(--color-text-muted);
      text-decoration: none;
      transition: var(--transition-all);

      &:hover {
        // color: var(--color-primary-light);
        color: var(--color-text);
        text-decoration: underline;
      }

      &__index {
        cursor: w-resize;
      }

      &__top {
        cursor: n-resize;
        background: transparent;
        border: none;
        padding: 0;
      }
    }
  }

  .info {
    display: flex;
    align-items: flex-end;
    border-top: var(--border);
    padding: var(--gutter);

    & > * {
      flex: 1;
    }

    &__links {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      gap: var(--space-sm);
      text-align: right;

      @media ${breakpoint.tablet} {
        flex-flow: row nowrap;
      }

      a {
        cursor: ne-resize;
      }
    }
  }
`

export default Footer
