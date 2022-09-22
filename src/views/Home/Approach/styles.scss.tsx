import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Approach = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gutter);

  height: 75vh;
  padding: var(--gutter);
  position: relative;

  width: 100%;

  & > div {
    flex: 1;
    position: sticky;
    top: calc(var(--header-height) + calc(var(--gutter) + var(--space-xl)));

    @media ${breakpoint.tablet} {
      flex: 0.5;
    }
  }

  .accordion-inner {
    padding-bottom: var(--space-lg);
  }
`

export default Approach
