import { useState } from 'react'

export function useFavResults ({ key, initialValue }) {
  const [storedValue, setStoredValue] = useState(() => {
    // In case some fails with browser localStorage
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = newValue => {
    setStoredValue(prevState => {
      // Agregate to the state using the previous state. Store the string into local storage
      const valueToStore = [...prevState, newValue]
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
      return valueToStore
    })
  }

  const deleteValue = valueToDelete => {
    setStoredValue(() => {
      // Delete (filtering) from previous state. Store the string into local storage
      const valueToStore = storedValue.filter(value => value !== valueToDelete)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
      return valueToStore
    })
  }

  return [storedValue, setValue, deleteValue]
}
