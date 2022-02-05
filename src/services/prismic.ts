import * as Prismic from '@prismicio/client'

export function getPrismicClient() {
  const endpoint = Prismic.getEndpoint('naped-blog')
  return Prismic.createClient(endpoint)
}
