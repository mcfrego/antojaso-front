import { useEffect } from 'react'

// Won't return anything to avoid infinite loop in Context
export function useCurrentLocation (setLocation) {
  const handleSuccess = position => {
    const { latitude, longitude } = position.coords

    setLocation(prevState => {
      // The currentValue format is the same through all the app
      return { ...prevState, currentValue: `${latitude},${longitude}` }
    })
  }

  const handleError = error => {
    setLocation(prevState => {
      return { ...prevState, currentError: error.message }
    })
  }

  useEffect(() => {
    const { geolocation } = navigator

    // No browser available
    if (!geolocation) {
      setLocation(prevState => {
        return { ...prevState, currentError: 'Geolocation is not supported' }
      })
      return
    }

    geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])
}
