import { FiSearch as SearchIcon } from 'react-icons/fi'

import { InputWrapper } from './styles'

export const SearchForm = () => (
  <form>
    <InputWrapper>
      <input type="text" placeholder="Quer ajuda na procura? Pesquise aqui" />
      <SearchIcon size={18} />
    </InputWrapper>
  </form>
)
