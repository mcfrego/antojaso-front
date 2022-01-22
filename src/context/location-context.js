import React, { useState } from 'react'
import { useCurrentLocation } from '../hooks'

export const LocationContext = React.createContext({
  location: {},
  onChangeLocation: () => {}
})

export function LocationProvider ({ children }) {
  const [location, setLocation] = useState({
    type: null,
    selectedName: '',
    selectedValue: null,
    selectedError: '',
    currentValue: null,
    currentError: ''
  })
  useCurrentLocation(setLocation)

  const onChangeLocation = ({ actionCheckbox, stateCheckbox, name, value }) => {
    setLocation(prevState => {
      if (actionCheckbox && stateCheckbox) {
        return {
          ...prevState,
          type: 'current',
          selectedValue: location.currentValue,
          selectedName: 'Current location'
        }
      }

      if (actionCheckbox && !stateCheckbox) {
        return {
          ...prevState,
          type: null,
          selectedValue: null,
          selectedName: ''
        }
      }

      if (!actionCheckbox) {
        return {
          ...prevState,
          type: 'near',
          selectedValue: value,
          selectedName: name
        }
      }
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
