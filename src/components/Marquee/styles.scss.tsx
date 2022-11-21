import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Marquee = styled.div`
  .marquee-container {
    padding: var(--space-md) 0;
  }

  .marquee {
    display: flex;
    justify-content: space-between;
    color: var(--color-text-muted);

    & > * {
      padding: 0 var(--gutter);
      font-weight: 400;
    }

    a {
      color: var(--color-text);
    }
  }
`

export default Marquee
