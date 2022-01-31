import styled, { css } from 'styled-components'

type WrapperType = {
  bg: string
}

export const Wrapper = styled.div<WrapperType>`
  ${({ theme, bg }) => css`
    width: 100%;
    height: 35rem;
    position: relative;
    background-image: url(${bg});
    background-size: cover;
    background-position: center center;
    z-index: 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%);
      z-index: 1;
    }
  `}
`

export const Tag = styled.div`
  ${({ theme }) => css`
    top: ${theme.spacings.xsmall};
    left: ${theme.spacings.xsmall};
    position: absolute;
    width: 8rem;
    padding: 0.8rem 0;
    text-align: center;
    background-color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`

export const Preview = styled.p`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${theme.spacings.xsmall};
    left: ${theme.spacings.xsmall};
    z-index: 2;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
  `}
`
