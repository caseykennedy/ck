// Projects styles:

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Projects = styled(motion.div)`
  display: flex;
  padding: 0 var(--gutter);
  margin-bottom: var(--gutter);

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
    margin-bottom: var(--space-xl);

    &__figure {
      /* border-radius: var(--radius-sm); */
      overflow: hidden;
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
          /* color: var(--color-white); */
          /* margin-left: var(--gutter); */
          transition: color var(--transition);
        }
      }

      ul {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        /* gap: var(--space-xxs); */

        li {
          display: flex;
          place-items: center;
          padding: var(--space-xxxs) var(--space-xxxs);

          /* border: var(--border); */
          border-radius: var(--radius-sm);
          white-space: nowrap;
          transition: color var(--transition);

          /* opacity: 0; */

          &:hover {
            color: var(--color-white);
          }
        }
      }
    }

    &:hover {
      .title {
        span {
          color: var(--color-white);
        }
      }

      ul li {
        opacity: 1;
      }
    }
  }
`

export default Projects
