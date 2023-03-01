import { Section } from "./Section.styled"

export const BoxSection = ({title, children}) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  )
}