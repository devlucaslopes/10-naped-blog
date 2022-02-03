import styled, { css } from 'styled-components'

export const Grid = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacings.xsmall};
  `}
`
