import styled, { css } from 'styled-components'

export const Summary = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weights.normal};
    color: ${theme.colors['white-200']};
  `}
`

export const PublishedAt = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors['white-200']};
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors['white-200']};

    img {
      width: 100%;
    }

    p + p {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
