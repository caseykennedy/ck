import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Hero = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 75vh;
  position: relative;
  z-index: 1;

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
    justify-content: stretch;
  }

  .billboard {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    position: relative;

    & > * {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      padding: var(--gutter);

      position: sticky;
      top: calc(var(--header-height) + calc(var(--gutter) + var(--space-xl)));

      /* &:first-child {
        border-bottom: var(--border);
      } */
    }
  }

  .meta {
    flex: 1;
    display: flex;
    gap: var(--gutter);
    margin-top: var(--header-height);
    padding: var(--gutter);
    position: relative;

    & > * {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;
      text-align: right;

      position: sticky;
      top: var(--header-height);
    }

    span {
      color: var(--color-text-muted);
    }
  }
`

export const Tetra = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;

  /* div {
    height: 80% !important;
  } */
`
