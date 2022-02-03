import Link from 'next/link'

import { PurpleLink } from './styles'

export type CustomLinkSizes = 'normal' | 'small'

type CustomLinkType = {
  size?: CustomLinkSizes
  url: string
  children: React.ReactNode
}

export const CustomLink = ({
  size = 'normal',
  url,
  children
}: CustomLinkType) => (
  <Link href={url}>
    <PurpleLink size={size}>{children}</PurpleLink>
  </Link>
)
