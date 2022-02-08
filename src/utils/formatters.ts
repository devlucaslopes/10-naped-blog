import { PrismicDocument } from '@prismicio/types'
import { RichText } from 'prismic-dom'

type Cover = {
  url: string
}

export const dateFormatter = (date: string) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

export const fullPostFormatter = (document: PrismicDocument) => {
  const { first_publication_date, data } = document
  const { title, summary, content, cover } = data

  const { url = '' } = cover as Cover

  return {
    title: RichText.asText(title),
    summary: RichText.asText(summary),
    content: RichText.asHtml(content),
    cover: url,
    publicatedAt: dateFormatter(first_publication_date)
  }
}

export const previewPostFormatter = (document: PrismicDocument) => {
  const { uid, tags, first_publication_date, data } = document
  const { title, summary, cover } = data

  const { url = '' } = cover as Cover

  return {
    slug: `/post/${uid!}`,
    title: RichText.asText(title),
    summary: RichText.asText(summary),
    cover: url,
    tag: tags[1],
    publicatedAt: dateFormatter(first_publication_date)
  }
}
