import Link from 'next/link'

import { PostProps } from '../../templates/Home'
import { CustomLink } from '../CustomLink'
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
    <Info>
      <h3>{title}</h3>
      <p>{summary}</p>
      <span>{publicatedAt}</span>
      <WrapperButton>
        <CustomLink size="small" url={slug}>
          Ler notícia
        </CustomLink>
      </WrapperButton>
    </Info>
  </Wrapper>
)
