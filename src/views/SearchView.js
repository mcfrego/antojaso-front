import { Section, FormSearch } from '../components'

export function SearchView () {
  return (
    <>
      <Section>
        <p>
          Are you in the middle of your work day and have a craving to eat
          something delicious? <strong> We got you!</strong>
        </p>
      </Section>
      <Section>
        <FormSearch />
      </Section>
    </>
  )
}
