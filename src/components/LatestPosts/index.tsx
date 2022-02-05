import { PostProps } from '../../templates/Home'
import { Heading } from '../Heading'
import { Thumb } from '../Thumb'

import { Wrapper } from './styles'

type LatestPostsProps = {
  posts: PostProps[]
}

export const LatestPosts = ({ posts }: LatestPostsProps) => (
  <Wrapper>
    <Heading>Lorem ipsum dolor</Heading>
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
