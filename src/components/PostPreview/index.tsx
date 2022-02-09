import Link from 'next/link'

import { PostProps } from '../../templates/Home'
import { CustomLink } from '../CustomLink'
import { SROnly } from '../SROnly'
import { Thumb } from '../Thumb'

import { Wrapper, Info, WrapperButton } from './styles'

type PostPreviewProps = PostProps

export const PostPreview = ({
  tag,
  cover,
  slug,
  title,
  summary,
  publicatedAt
}: PostPreviewProps) => (
  <Wrapper>
    <Thumb
      tag={tag}
      backgroundURL={cover}
      size="small"
      orientation="portrait"
      slug={slug}
    />
    <Info aria-labelledby={`info-${slug}`}>
      <h3>{title}</h3>
      <p>{summary}</p>
      <time>
        <SROnly>publicado em: </SROnly> {publicatedAt}
      </time>
      <WrapperButton>
        <CustomLink size="small" url={slug} id={`info-${slug}`}>
          Ler notícia <SROnly> {title}</SROnly>
        </CustomLink>
      </WrapperButton>
    </Info>
  </Wrapper>
)
