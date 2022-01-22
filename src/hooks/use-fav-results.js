import { useState } from 'react'

export function useFavResults ({ key, initialValue }) {
  const [storedValue, setStoredValue] = useState(() => {
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
      const valueToStore = [...prevState, newValue]
      window.localStorage.setItem(key, JSON.stringify(storedValue))
      return valueToStore
    })
  }

  const deleteValue = valueToDelete => {
    setStoredValue(() => {
      const valueToStore = storedValue.filter(value => value !== valueToDelete)
      window.localStorage.setItem(key, valueToStore)
      return valueToStore
    })
  }

  return [storedValue, setValue, deleteValue]
}
