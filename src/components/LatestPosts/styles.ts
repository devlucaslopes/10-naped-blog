import styled, { css } from 'styled-components'

import * as ThumbStyles from '../Thumb/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    overflow: hidden;

    > div {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      gap: ${theme.spacings.xsmall};
    }

    ${ThumbStyles.Preview} {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
