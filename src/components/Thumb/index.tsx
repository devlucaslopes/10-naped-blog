import Link from 'next/link'

import { Wrapper, Tag, Preview } from './styles'

export type ThumbSizes = 'normal' | 'small'
export type ThumbOrientations = 'landscape' | 'portrait'

type ThumbType = {
  tag: string
  slug: string
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
  orientation,
  slug
}: ThumbType) => (
  <Link href={slug} passHref>
    <Wrapper
      size={size}
      orientation={orientation}
      bg={backgroundURL}
      aria-labelledby={description ? slug : ''}
      aria-hidden={!description && 'true'}
    >
      <Tag size={size}>{tag}</Tag>
      {description && (
        <Preview size={size} id={slug}>
          {description}
        </Preview>
      )}
    </Wrapper>
  </Link>
)
