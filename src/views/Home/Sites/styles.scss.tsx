// Projects styles:

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Sites = styled(motion.div)`
  display: flex;
  padding: 0 var(--gutter);
  margin-bottom: var(--gutter);

  .project-grid {
    display: flex;
    flex-flow: column nowrap;

    width: 100%;
  }

  .project {
    flex: 1;
    border-bottom: var(--border);
    padding: var(--space-xxl) 0 0;

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

export default Sites
