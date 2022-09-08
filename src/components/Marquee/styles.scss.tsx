import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Marquee = styled.div`
  padding: var(--gutter) 0;

  .marquee {
    display: flex;
    justify-content: space-between;

    & > * {
      padding: 0 var(--gutter);
    }
  }
`

export default Marquee
