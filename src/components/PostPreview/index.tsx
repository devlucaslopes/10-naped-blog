import Link from 'next/link'
import { CustomLink } from '../CustomLink'

import { Thumb } from '../Thumb'

import { Wrapper, Info, WrapperButton } from './styles'

export const PostPreview = () => (
  <Wrapper>
    <Thumb
      tag="games"
      backgroundURL="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      size="small"
      orientation="portrait"
    />
    <Info>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
        tellus, malesuada et velit in, blandit molestie dolor.
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
        tellus, malesuada et velit in, blandit molestie dolor.
      </p>
      <span>31/01/2022</span>
      <WrapperButton>
        <CustomLink size="small" url="/">
          Ler notícia
        </CustomLink>
      </WrapperButton>
    </Info>
  </Wrapper>
)
