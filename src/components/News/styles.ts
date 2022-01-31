import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: ${theme.spacings.xsmall};

    div.right-side {
      display: grid;
      grid-template-rows: 1fr 1fr;
      gap: ${theme.spacings.xsmall};
    }
  `}
`
