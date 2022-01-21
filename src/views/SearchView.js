import { useState } from 'react'

import { useCurrentLocation, useSearchResults } from '../hooks'

import { Section, FormLocation, FormSearch, ResultList } from '../components'

export function SearchView () {
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
        <p>
          Are you in the middle of your work day and have a craving to eat
          something delicious?
        </p>
        <p>
          <strong> We got you!</strong>
        </p>
      </Section>
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
        location={location}
        isLoading={isLoading}
        locationError={currentLocationError}
        searchError={error}
      />
    </>
  )
}
