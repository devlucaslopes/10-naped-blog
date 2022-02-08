import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { RichText } from 'prismic-dom'

import { getPrismicClient } from '../services/prismic'
import {
  HomeTemplate,
  HomeTemplateProps,
  PostsBySectionType
} from '../templates/Home'
import { dateFormatter, previewPostFormatter } from '../utils/formatters'

const SECTIONS_CONFIGS = [
  {
    tag: 'news',
    size: 3
  },
  {
    tag: 'most-popular',
    size: 8
  },
  {
    tag: 'latest',
    size: 3
  },
  {
    tag: 'recommended',
    size: 6
  }
]

const Home = (props: HomeTemplateProps) => {
  return (
    <>
      <Head>
        <title>Página inicial | Naped Blog</title>
      </Head>
      <HomeTemplate {...props} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = getPrismicClient()

  const postsBySection: PostsBySectionType = {}

  await Promise.all(
    SECTIONS_CONFIGS.map(async ({ tag, size }) => {
      const { results } = await client.getByTag(tag, {
        orderings: {
          field: 'document.first_publication_date',
          direction: 'desc'
        },
        page: 1,
        pageSize: size
      })

      const posts = results.map((post) => previewPostFormatter(post))

      postsBySection[tag] = posts
    })
  )

  return {
    props: {
      postsBySection
    }
  }
}

export default Home
