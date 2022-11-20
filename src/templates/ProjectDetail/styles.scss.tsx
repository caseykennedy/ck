// Project Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const ProjectDetail = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  .project-title {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    gap: var(--gutter);

    @media ${breakpoint.tablet} {
      flex-flow: row nowrap;
    }

    p {
      /* display: block; */
      color: var(--color-text-muted);
      font-size: var(--text-base-size);
      text-align: right;
    }
  }

  .details {
    display: flex;
    flex-flow: column nowrap;

    @media ${breakpoint.tablet} {
      flex-flow: row nowrap;
    }

    & > * {
      flex: 1;
    }

    h2,
    p {
      margin-bottom: var(--space-xxxxl);
    }

    &__meta {
      display: flex;
      flex-flow: row nowrap;
      gap: var(--gutter);

      &__col {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;

        & > * {
          margin-bottom: var(--space-lg);

          span {
            display: block;
            color: var(--color-text-muted);
          }
        }
      }
    }
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  gap: var(--space-xxxxs);

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const PrevNext = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  gap: 1px;

  background: var(--color-border);

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  & > * {
    background: var(--color-bg);
  }

  a {
    display: flex;
    flex-flow: row nowrap;

    background: var(--color-bg);
    padding: var(--gutter);

    & > * {
      flex: 1;
    }

    .detail {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: space-between;

      color: var(--color-text-bright);
      font-size: var(--text-md);

      div {
        color: var(--color-text-muted);
        font-size: var(--text-base-size);
      }
    }
  }
`
