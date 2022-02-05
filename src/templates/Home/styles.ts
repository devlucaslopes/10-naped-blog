import styled, { css } from 'styled-components'

const HEIGHT_PREVIEW = '15rem'
const NUMBER_OF_ROWS = 5

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: ${theme.spacings.xsmall};

    height: calc(
      (${HEIGHT_PREVIEW} + ${theme.spacings.xsmall}) * ${NUMBER_OF_ROWS}
    );
  `}
`
