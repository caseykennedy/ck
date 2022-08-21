// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'

// ___________________________________________________________________

export const Footer = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  padding: var(--gutter);
  height: 100vh;
  width: 4rem;

  background: var(--color-text);
  border-left: var(--border);
  color: var(--color-bg);

  a,
  .info {
    svg path {
      fill: var(--color-bg);

      &:hover {
        fill: var(--color-white);
      }
    }
  }
`

export default Footer
