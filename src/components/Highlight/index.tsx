import { Wrapper, Tag, Preview } from './styles'

export type HighlightSizes = 'normal' | 'small'
export type HightlightOrientations = 'landscape' | 'portrait'

type HighlightType = {
  tag: string
  description?: string
  size: HighlightSizes
  orientation: HightlightOrientations
}

export const Highlight = ({
  tag,
  description,
  size,
  orientation
}: HighlightType) => (
  <Wrapper
    size={size}
    orientation={orientation}
    bg="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80"
  >
    <Tag size={size}>{tag}</Tag>
    {description && (
      <Preview size={size}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
        tellus, malesuada et velit in, blandit molestie dolor.
      </Preview>
    )}
  </Wrapper>
)
