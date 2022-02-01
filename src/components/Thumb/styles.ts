import styled, { css, DefaultTheme } from 'styled-components'

import { ThumbSizes, ThumbOrientations } from '.'

type WrapperType = {
  bg: string
  size: ThumbSizes
  orientation: ThumbOrientations
}

const NUMBER_OF_ROWS = 2
const HALF_GAP_ROWS = '0.8rem'

const wrapperModifier = {
  normalAndLandscape: () => css`
    height: 35rem;
  `,
  normalAndPortrait: () => css`
    height: 25rem;
  `,
  smallAndLandscape: () => css`
    height: calc((35rem / ${NUMBER_OF_ROWS}) - ${HALF_GAP_ROWS});
  `,
  smallAndPortrait: () => css`
    width: 15rem;
    height: 15rem;
  `
}

export const Wrapper = styled.div<WrapperType>`
  ${({ bg, size, orientation }) => css`
    width: 100%;
    position: relative;
    background-image: url(${bg});
    background-size: cover;
    background-position: center center;
    z-index: 0;

    ${size === 'normal' &&
    orientation === 'landscape' &&
    wrapperModifier.normalAndLandscape()}

    ${size === 'normal' &&
    orientation === 'portrait' &&
    wrapperModifier.normalAndPortrait()}

    ${size === 'small' &&
    orientation === 'landscape' &&
    wrapperModifier.smallAndLandscape()}

    ${size === 'small' &&
    orientation === 'portrait' &&
    wrapperModifier.smallAndPortrait()}

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

type TagType = {
  size: ThumbSizes
}

const tagModifier = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    width: 8rem;
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    width: 6rem;
  `
}

export const Tag = styled.div<TagType>`
  ${({ theme, size }) => css`
    top: ${theme.spacings.xsmall};
    left: ${theme.spacings.xsmall};
    position: absolute;
    padding: 0.8rem 0;
    text-align: center;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    text-transform: uppercase;
    ${tagModifier[size](theme)};
  `}
`

type PreviewType = {
  size: ThumbSizes
}

const previewModifier = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `
}

export const Preview = styled.p<PreviewType>`
  ${({ theme, size }) => css`
    position: absolute;
    bottom: ${theme.spacings.xsmall};
    left: ${theme.spacings.xsmall};
    z-index: 2;
    color: ${theme.colors.white};
    ${previewModifier[size](theme)};
  `}
`
