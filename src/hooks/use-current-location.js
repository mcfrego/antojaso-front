import { useEffect } from 'react'

export function useCurrentLocation (setLocation) {
  const handleSuccess = position => {
    const { latitude, longitude } = position.coords

    setLocation(prevState => {
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

    if (!geolocation) {
      setLocation(prevState => {
        return { ...prevState, currentError: 'Geolocation is not supported' }
      })
      return
    }

    geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])
}
