import { PrismicDocument } from '@prismicio/types'
import { RichText } from 'prismic-dom'

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

  return {
    title: RichText.asText(title),
    summary: RichText.asText(summary),
    content: RichText.asHtml(content),
    cover: cover?.url,
    publicatedAt: dateFormatter(first_publication_date)
  }
}

export const previewPostFormatter = (document: PrismicDocument) => {
  const { uid, tags, first_publication_date, data } = document
  const { title, summary, cover } = data

  return {
    slug: `/post/${uid!}`,
    title: RichText.asText(title),
    summary: RichText.asText(summary),
    cover: cover?.url,
    tag: tags[1],
    publicatedAt: dateFormatter(first_publication_date)
  }
}
