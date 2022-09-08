// Projects styles:

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Projects = styled(motion.div)`
  display: flex;
  padding: 0 var(--gutter);
  margin-bottom: var(--space-xxxxl);

  .project-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    gap: var(--gutter);

    width: 100%;

    @media ${breakpoint.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .project {
    margin-bottom: var(--space-xxxl);

    &__figure {
      margin-bottom: var(--gutter);

      img {
        border-radius: var(--radius-sm);
      }
    }

    &__meta {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-xxxl);
      /* padding-right: var(--space-xxl); */

      .title {
        span {
          color: var(--color-white);
          margin-left: var(--gutter);
        }
      }

      ul {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: var(--space-xxs);

        li {
          display: flex;
          place-items: center;
          padding: var(--space-xxxs) var(--space-sm);

          border: var(--border);
          border-radius: var(--radius-sm);
          white-space: nowrap;
          transition: color var(--transition);

          &:hover {
            color: var(--color-white);
          }
        }
      }
    }
  }
`

export default Projects
