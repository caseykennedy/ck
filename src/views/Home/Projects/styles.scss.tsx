// Projects styles:

import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Projects = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gutter);

  a {
    color: var(--color-text-muted);

    &:hover {
      color: var(--color-text-muted);
    }
  }

  .project {
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;

    @media ${breakpoint.tablet} {
      flex-flow: row-reverse nowrap;
    }

    & > * {
      flex: 1;
    }

    &__figure {
      overflow: hidden;
    }

    &__details {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      backdrop-filter: blur(7px);
      background-color: var(--color-bg-dark-blur);
      border: var(--border);
      padding: var(--gutter);
      /* padding-bottom: var(--space-xxxl); */

      .title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        font-size: var(--text-md);
        margin-bottom: var(--space-xxl);

        &__client {
          color: var(--color-text);
          margin-bottom: var(--space-xxxxs);
        }

        &__tagline {
          color: var(--color-text-muted);
        }
      }

      .excerpt {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-end;
        justify-content: space-between;

        &__desc {
          max-inline-size: 44ch;
        }

        &__icon {
          svg {
            transform: rotate(-90deg);
          }
        }
      }

      ul {
        display: none;

        @media ${breakpoint.tablet} {
          display: block;
        }

        li {
          color: var(--color-text);
          font-size: var(--text-base-size);
          white-space: nowrap;
        }
      }
    }
  }
`

export default Projects
