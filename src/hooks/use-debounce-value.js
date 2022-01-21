import { useState, useEffect } from 'react'

export function useDebounceValue (value, delay = 200) {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(timerId)
    }
  }, [value, delay])

  return debounceValue
}
