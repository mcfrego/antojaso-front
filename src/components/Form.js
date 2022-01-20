import { useState } from 'react'

import { useCurrentLocation } from '../hooks'
import { Section, FormLocation, FormSearch } from '.'

export function Form () {
  const [location, setLocation] = useState({ type: null, value: '' })
  const [currentLocation, errorCurrentLocation] = useCurrentLocation()

  return (
    <Section>
      <FormLocation
        location={location}
        currentLocation={currentLocation}
        onChangeLocation={setLocation}
      />
      <FormSearch location={location} />
    </Section>
  )
}
