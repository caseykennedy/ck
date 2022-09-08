// Project Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const ProjectDetail = styled.div`
  margin-top: var(--space-xxxxl);
  padding: var(--gutter);
`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  gap: var(--gutter);

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    border-radius: var(--radius-sm);
  }
`
