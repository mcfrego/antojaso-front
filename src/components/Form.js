import { useState } from 'react'

import { useCurrentLocation, useSearchResults } from '../hooks'
import { Section, FormLocation, FormSearch } from '.'

export function Form () {
  const [location, setLocation] = useState({ type: null, value: '' })
  const [search, setSearch] = useState('')
  const [currentLocation, errorCurrentLocation] = useCurrentLocation()
  const { data, isLoading } = useSearchResults({
    searchTerm: search,
    ...location
  })

  const isSearchInputDisabled = !location.type

  console.log(data)

  return (
    <Section>
      <FormLocation
        location={location}
        currentLocation={currentLocation}
        onChangeLocation={setLocation}
      />
      <FormSearch
        search={search}
        onChangeSearch={setSearch}
        isInputDisabled={isSearchInputDisabled}
      />
    </Section>
  )
}
