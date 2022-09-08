// Home Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Split = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  & > * {
    flex: 1;
  }
`

export const Home = styled.main`
  width: 100%;

  h5 {
    color: var(--color-primary);
  }

  .lead {
    color: var(--color-text-muted);
  }

  .list-title {
    margin-top: var(--space-xxl);
  }
`

export const Intro = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  & > * {
    flex: 1;

    &:not(:first-child) {
    }
  }
`

export const Capabilities = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  h4 {
    margin-bottom: 0;
  }

  & > * {
    /* flex: 1; */

    &:not(:first-child) {
    }
  }
`
