import { PostProps } from '../../templates/Home'
import { Heading } from '../Heading'
import { Thumb } from '../Thumb'

import { Wrapper } from './styles'

type RecommendedPostsProps = {
  posts: PostProps[]
}

export const RecommendedPosts = ({ posts }: RecommendedPostsProps) => (
  <Wrapper>
    <Heading>Posts recomendados</Heading>

    <div>
      {posts.map((post) => (
        <Thumb
          key={post.slug}
          slug={post.slug}
          tag={post.tag}
          backgroundURL={post.cover}
          size="normal"
          orientation="portrait"
          description={post.summary}
        />
      ))}
    </div>
  </Wrapper>
)
