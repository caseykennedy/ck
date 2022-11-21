// Buttons
// ___________________________________________________________________

import { css } from 'styled-components'
import { breakpoint, fontSmooth } from './mixins'

// ___________________________________________________________________

const Buttons = css`
  :root {
    --btn-primary-bg: var(--color-primary);
    --btn-primary-color: var(--color-bg);

    /* --btn-height: 58px; */
    --btn-padding-x: var(--space-md);
    --btn-padding-y: var(--space-sm);
    --btn-font-size: var(--text-root-size);
    --btn-font-weight: 600;
    --btn-radius: var(--radius);
  }

  /* [data-theme='darkMode'] {
    --btn-primary-bg: var(--color-primary);
    --btn-primary-color: var(--color-secondary);
    --btn-secondary-bg: var(--color-secondary);
    --btn-secondary-color: var(--color-primary);
  } */

  button {
    background: transparent;
    border: none;
    margin: 0;
    padding: 0;
  }

  .btn {
    ${fontSmooth}

    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-lg);

    background: var(--btn-primary-bg);
    border: 1px solid transparent;
    border-radius: var(--btn-radius);

    color: var(--color-bg);
    font-size: var(--btn-font-size);
    font-weight: var(--btn-font-weight);
    white-space: nowrap;
    text-decoration: none;

    height: var(--btn-height);
    padding: var(--btn-padding-y) var(--btn-padding-x);

    cursor: pointer;
    transition: var(--transition-all);

    &:active,
    &:hover {
      transform: translateX(2.5px);
    }

    svg {
      /* width: var(--icon-size); */

      path {
        fill: var(--color-bg);
      }
    }
  }

  .btn--primary {
    background: var(--color-text);

    &:hover {
      background: var(--color-text-muted);
      color: var(--color-bg);
    }
  }

  .btn--outline {
    background: var(--color-bg);
    border: var(--border);
    border-color: var(--color-white);
    color: var(--color-text);

    svg path {
      fill: var(--color-text);
    }

    /* &:hover,
    &:focus {
      background: var(--btn-outline-bg-hover);
      color: var(--color-text);
    } */
  }

  // size
  .btn--sm {
    font-size: var(--text-sm);
    height: calc(var(--btn-height) * 0.75);
    padding-right: calc(var(--btn-padding-x) * 0.5);
    padding-left: calc(var(--btn-padding-x) * 0.5);
  }

  /* .btn--md {
    font-size: var(--btn-font-size);
  } */

  .btn--lg {
    font-size: calc(var(--text-base-size) * 1.1);
    height: calc(var(--btn-height) * 1.25);
    padding-top: calc(var(--btn-padding-y) * 1.25);
    padding-right: calc(var(--btn-padding-x) * 1.25);
    padding-bottom: calc(var(--btn-padding-y) * 1.25);
    padding-left: calc(var(--btn-padding-x) * 1.25);
  }

  .btn--full-width {
    width: 100%;
  }
`

export default Buttons
