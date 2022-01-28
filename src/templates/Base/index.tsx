type BaseTemplateType = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseTemplateType) => {
  return <div>{children}</div>
}
