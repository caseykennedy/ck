// Projects styles:

import styled from 'styled-components'
// import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Sites = styled.div`
  display: flex;
  margin-bottom: var(--gutter);
  overflow: hidden;

  .site-list {
    display: flex;
    flex-flow: column nowrap;
    /* position: relative; */
    width: 100%;

    a {
      display: flex;

      /* &:not(:last-child) {
        border-bottom: var(--border);
      } */
    }

    &__row {
      flex: 1;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;

      & > * {
        flex: 1;
      }
    }

    &__meta {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;

      position: relative;
      z-index: 1;
      padding: var(--space-sm) 0 var(--space-sm);

      .name {
        font-size: var(--text-md);

        span {
          transition: color var(--transition);
        }
      }
    }

    &__figure {
      display: flex;

      position: absolute;
      top: var(--gutter);
      bottom: var(--gutter);
      right: var(--gutter);
      z-index: 0;

      width: calc(50% - calc(var(--gutter) * 2));

      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
      }
    }
  }
`

export default Sites
