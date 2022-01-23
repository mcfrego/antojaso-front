import { useState, useContext } from 'react'
import { LocationContext } from '../context/location-context'
import { useSearchResults, useTypingLocation } from '../hooks'
import { Section, FormLocation, FormSearch, ResultList } from '../components'

export default function SearchView () {
  // Better to call location context here, instead each child component.
  const { location, onChangeLocation } = useContext(LocationContext)
  const { data: typingLocationResults } = useTypingLocation({
    searchTerm: location.selectedName,
    locationTerm: location.currentValue
  })

  const [search, setSearch] = useState('')
  const {
    data: searchResults,
    isLoading: isLoadingSearchResults,
    error: errorSearchResults
  } = useSearchResults({
    searchTerm: search,
    locationTerm: location.selectedValue
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
          onChangeLocation={onChangeLocation}
          typingLocationResults={typingLocationResults}
        />
        <FormSearch
          search={search}
          onChangeSearch={setSearch}
          isInputDisabled={isSearchInputDisabled}
        />
      </Section>
      <ResultList
        location={location}
        results={searchResults}
        isLoading={isLoadingSearchResults}
        searchError={errorSearchResults}
      />
    </>
  )
}
