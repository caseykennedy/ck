// Section styles:

// ___________________________________________________________________

import styled from 'styled-components'

// ___________________________________________________________________

export const Section = styled.section<{ bg?: string, border?: boolean, color?: string, maxWidth?: string, pt?: string, pr?: string, pb?: string, pl?: string, overflow?: string }>`
  background: ${(p) => p.bg || 'none'};
  color: ${(p) => p.color || 'inherit'};
  padding-top: ${(p) => p.pt};
  padding-bottom: ${(p) => p.pb};
  border-top: ${(p) => (p.border ? 'var(--border)' : 'none')};
  overflow: ${(p) => p.overflow || 'visible'};
  position: relative;
  width: 100%;

  .section__inner {
    box-sizing: content-box;
    max-width: ${p => p.maxWidth || '100%'};
    margin: 0 auto;
    padding-right: ${(p) => p.pr};
    padding-left: ${(p) => p.pl};
  }
`

export default Section
