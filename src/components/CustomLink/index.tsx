import Link from 'next/link'
import { LinkHTMLAttributes } from 'react'

import { PurpleLink } from './styles'

export type CustomLinkSizes = 'normal' | 'small'

type CustomLinkType = {
  size?: CustomLinkSizes
  url: string
  children: React.ReactNode
} & LinkHTMLAttributes<HTMLElement>

export const CustomLink = ({
  size = 'normal',
  url,
  children,
  ...props
}: CustomLinkType) => (
  <Link href={url} {...props}>
    <PurpleLink size={size}>{children}</PurpleLink>
  </Link>
)
