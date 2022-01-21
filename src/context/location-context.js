import React, { useState } from 'react'

import { useCurrentLocation } from '../hooks'

export const LocationContext = React.createContext({
  location: {},
  onChangeLocation: () => {}
})

export function LocationProvider ({ children }) {
  const [currentLocation, currentLocationError] = useCurrentLocation()
  const [location, setLocation] = useState({
    type: null,
    value: ''
  })
  const onChangeLocation = ({ actionFromCheckbox, type, value }) => {
    setLocation(prevState => {
      if (actionFromCheckbox) {
        return prevState.type !== 'current'
          ? {
              type: 'current',
              value: currentLocation
            }
          : { type: null, value: '' }
      }
      return { type, value }
    })
  }

  return (
    <LocationContext.Provider
      value={{
        location,
        onChangeLocation,
        currentLocation: {
          value: currentLocation,
          error: currentLocationError
        }
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
