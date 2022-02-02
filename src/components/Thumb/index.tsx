import Link from 'next/link'

import { Wrapper, Tag, Preview } from './styles'

export type ThumbSizes = 'normal' | 'small'
export type ThumbOrientations = 'landscape' | 'portrait'

type ThumbType = {
  tag: string
  description?: string
  backgroundURL: string
  size: ThumbSizes
  orientation: ThumbOrientations
}

export const Thumb = ({
  tag,
  description,
  backgroundURL,
  size,
  orientation
}: ThumbType) => (
  <Link href="/asd" passHref>
    <Wrapper size={size} orientation={orientation} bg={backgroundURL}>
      <Tag size={size}>{tag}</Tag>
      {description && (
        <Preview size={size}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </Preview>
      )}
    </Wrapper>
  </Link>
)
