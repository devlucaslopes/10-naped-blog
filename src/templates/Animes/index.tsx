import { Base } from '../Base'

import { Jumbotron } from '../../components/Jumbotron'
import { SearchForm } from '../../components/SearchForm'

export const AnimesTemplate = () => {
  return (
    <Base>
      <Jumbotron
        title="Animes"
        subtitle="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados."
        backgroundURL="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <SearchForm />
    </Base>
  )
}
