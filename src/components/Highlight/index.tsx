import { Wrapper, Tag, Preview } from './styles'

export type HighlightSizes = 'normal' | 'small'
export type HightlightOrientations = 'landscape' | 'portrait'

type HighlightType = {
  tag: string
  description?: string
  backgroundURL: string
  size: HighlightSizes
  orientation: HightlightOrientations
}

export const Highlight = ({
  tag,
  description,
  backgroundURL,
  size,
  orientation
}: HighlightType) => (
  <Wrapper size={size} orientation={orientation} bg={backgroundURL}>
    <Tag size={size}>{tag}</Tag>
    {description && (
      <Preview size={size}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
        tellus, malesuada et velit in, blandit molestie dolor.
      </Preview>
    )}
  </Wrapper>
)
