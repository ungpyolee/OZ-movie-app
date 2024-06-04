import { useState, useEffect } from 'react'

export const useDebounce = (value, delay) => {
  
  const [debouncedValue, setdebouncedValue] = useState(value)

  useEffect(() => {
    const hanlder = setTimeout(() => {
        setdebouncedValue(value)
    }, delay)
  
    return () => {
      clearTimeout(hanlder)
    }
  }, [value, delay])
  
    return debouncedValue
}