import styled, { css } from 'styled-components'

import * as HeadingStyles from '../Heading/styles'

const HEIGHT_PREVIEW = '15rem'
const NUMBER_OF_ROWS = 5

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: ${theme.spacings.xsmall};

    height: calc(
      (${HEIGHT_PREVIEW} + ${theme.spacings.xsmall}) * ${NUMBER_OF_ROWS}
    );
  `}
`

export const PostPreviewList = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors['gray-200']};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
    }
  `}
`

export const LatestPostsList = styled.section`
  ${({ theme }) => css`
    overflow: hidden;

    ${HeadingStyles.Title} {
      margin-bottom: calc(${theme.spacings.xsmall} + 1.6rem);
    }

    > div {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      gap: ${theme.spacings.xsmall};
    }
  `}
`
