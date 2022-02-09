import { Text } from './styles'

type SROnlyProps = {
  children: React.ReactNode
}

export const SROnly = ({ children }: SROnlyProps) => <Text>{children}</Text>
