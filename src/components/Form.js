import { useState } from 'react'

import { useCurrentLocation, useSearchResults } from '../hooks'
import { Section, FormLocation, FormSearch, ResultList } from '.'

export function Form () {
  const [location, setLocation] = useState({ type: null, value: '' })
  const [search, setSearch] = useState('')
  const [currentLocation, currentLocationError] = useCurrentLocation()
  const { data, isLoading, error } = useSearchResults({
    searchTerm: search,
    ...location
  })

  const isSearchInputDisabled = !location.type

  return (
    <>
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
      <ResultList
        results={data}
        isLoading={isLoading}
        locationError={currentLocationError}
        searchError={error}
      />
    </>
  )
}
