import { FormEvent, useState } from 'react'
import * as prismic from '@prismicio/client'

import { getPrismicClient } from '../../services/prismic'
import { previewPostFormatter } from '../../utils/formatters'

import { Base } from '../Base'
import { Jumbotron } from '../../components/Jumbotron'
import { SearchForm } from '../../components/SearchForm'
import { Results } from '../../components/Results'
import { PostProps } from '../Home'
import { Loading } from '../../components/Loading'

export const AnimesTemplate = () => {
  const [loading, setLoading] = useState(false)
  const [term, setTerm] = useState('')
  const [posts, setPosts] = useState<PostProps[]>([])
  const [isEmpty, setIsEmpty] = useState(false)

  const resetForm = () => {
    setPosts([])
    setLoading(true)
    setIsEmpty(false)
  }

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()
    resetForm()

    const client = getPrismicClient()

    const { results } = await client.get({
      predicates: prismic.predicate.fulltext('my.blog_post.title', term)
    })

    const data = results.map((post) => previewPostFormatter(post))

    setPosts(data)
    setIsEmpty(!!data.length)
    setLoading(false)
  }

  return (
    <Base hideFooter>
      <Jumbotron
        title="Animes"
        subtitle="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados."
        backgroundURL="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <SearchForm term={term} setTerm={setTerm} handleSearch={handleSearch} />

      {loading && <Loading />}

      {!isEmpty && !loading ? (
        'Nenhum post encontrado, tente novamente.'
      ) : (
        <Results posts={posts} />
      )}
    </Base>
  )
}
