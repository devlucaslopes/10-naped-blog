import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { fullPostFormatter, previewPostFormatter } from '../../utils/formatters'
import { getPrismicClient } from '../../services/prismic'
import { PostTemplate, PostTemplateProps } from '../../templates/Post'

const Post = (props: PostTemplateProps) => (
  <>
    <Head>
      <title>{props.post.title} | Naped Blog</title>
    </Head>
    <PostTemplate {...props} />
  </>
)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const { slug } = params

  const client = getPrismicClient()

  const response = await client.getByUID('blog_post', String(slug))

  const post = fullPostFormatter(response)

  const responseRecommended = await client.getAllBySomeTags(response.tags)

  const recommendedPosts = responseRecommended.map((post) =>
    previewPostFormatter(post)
  )

  return {
    props: {
      post,
      recommendedPosts
    }
  }
}

export default Post
