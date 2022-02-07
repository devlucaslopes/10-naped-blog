import { Heading } from '../../components/Heading'
import { RecommendedPosts } from '../../components/RecommendedPosts'
import { Base } from '../Base'
import { PostProps } from '../Home'
import { Summary, Content, PublishedAt } from './style'

export type FullPost = {
  title: string
  summary: string
  content: string
  cover: string
  tag: string
  publicatedAt: string
}

export type PostTemplateProps = {
  post: FullPost
  recommendedPosts: PostProps[]
}

export const PostTemplate = ({ post, recommendedPosts }: PostTemplateProps) => {
  return (
    <Base>
      <Heading>{post.title}</Heading>
      <Summary>{post.summary}</Summary>
      <PublishedAt>{post.publicatedAt}</PublishedAt>
      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      <RecommendedPosts posts={recommendedPosts} />
    </Base>
  )
}
