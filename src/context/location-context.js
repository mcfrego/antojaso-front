import React, { useState } from 'react'

import { useCurrentLocation } from '../hooks'

export const LocationContext = React.createContext({
  location: {},
  onChangeLocation: () => {}
})

export function LocationProvider ({ children }) {
  const [location, setLocation] = useState({
    type: null,
    value: '',
    current: null,
    currentError: ''
  })
  useCurrentLocation(setLocation)

  const onChangeLocation = ({ actionFromCheckbox, type, value }) => {
    setLocation(prevState => {
      if (actionFromCheckbox) {
        return prevState.type !== 'current'
          ? {
              ...prevState,
              type: 'current',
              value: location.current
            }
          : { ...prevState, type: null, value: '' }
      }
      return { ...prevState, type, value }
    })
  }

  return (
    <LocationContext.Provider
      value={{
        location,
        onChangeLocation
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
