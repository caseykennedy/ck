// Project Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const ProjectDetail = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: var(--space-xxxxl);
  padding: var(--gutter);
  width: 100%;

  .intro {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: var(--gutter);
  }

  .study {
    margin-top: var(--space-xxxxl);
  }

  .pill {
    display: inline-block;
    /* border: var(--border);
    border-color: alpha(var(--color-white), 0.25);
    border-radius: var(--radius); */
    font-size: var(--text-sm);
    margin-right: var(--space-sm);
    /* padding: var(--space-xxxs) var(--space-sm); */
    width: fit-content;
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  gap: var(--gutter);

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`
