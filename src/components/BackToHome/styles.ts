import styled, { css } from 'styled-components'

import * as CustomLinkStyles from '../CustomLink/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: calc(100vh - 9rem);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: calc(${theme.spacings.medium} * 2);

    ${CustomLinkStyles.PurpleLink} {
      width: 18rem;
      margin-top: ${theme.spacings.xsmall};
    }

    h1 {
      max-width: 45rem;
      font-size: calc(${theme.font.sizes.xlarge} * 2);
      font-weight: ${theme.font.weights.normal};
      margin-bottom: ${theme.spacings.xsmall};
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    div:nth-child(1) {
      p {
        font-size: ${theme.font.sizes.xlarge};
      }
    }

    div:nth-child(2) {
      p {
        margin: ${theme.spacings.xsmall} auto 0 auto;
        max-width: 30rem;
        text-align: center;
        font-size: ${theme.font.sizes.large};
      }
    }
  `}
`
