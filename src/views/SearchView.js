import { useState, useContext } from 'react'
import { LocationContext } from '../context/location-context'
import { useSearchResults } from '../hooks'
import { Section, FormLocation, FormSearch, ResultList } from '../components'

export function SearchView () {
  const [search, setSearch] = useState('')
  const { location, onChangeLocation, currentLocation } = useContext(
    LocationContext
  )

  const { data, isLoading, error } = useSearchResults(search, location)

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
          currentLocation={currentLocation.value}
          onChangeLocation={onChangeLocation}
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
        locationError={currentLocation.error}
        searchError={error}
      />
    </>
  )
}
