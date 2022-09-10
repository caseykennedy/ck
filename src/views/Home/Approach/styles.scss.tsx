import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Approach = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  gap: var(--gutter);

  height: 75vh;
  padding: var(--gutter);
  position: relative;

  width: 100%;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  .accordion-inner {
    padding-bottom: var(--space-lg);
  }
`

export default Approach
