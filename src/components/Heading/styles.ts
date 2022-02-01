import styled, { css } from 'styled-components'

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weights.normal};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 25rem;
      height: 0.3rem;
      background-color: ${theme.colors.primary};
      left: 0;
      bottom: -1.2rem;
    }
  `}
`
