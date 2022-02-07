import { FormEvent } from 'react'
import { FiSearch as SearchIcon } from 'react-icons/fi'

import { InputWrapper } from './styles'

type SearchFormType = {
  term: string
  setTerm: (value: string) => void
  handleSearch: (event: FormEvent) => Promise<void>
}

export const SearchForm = ({ term, setTerm, handleSearch }: SearchFormType) => {
  return (
    <form onSubmit={handleSearch}>
      <InputWrapper>
        <input
          type="text"
          placeholder="Quer ajuda na procura? Pesquise aqui"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <SearchIcon size={18} />
      </InputWrapper>
    </form>
  )
}
