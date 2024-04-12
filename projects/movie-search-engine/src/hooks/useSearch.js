import { useEffect, useRef, useState } from "react"


export function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect ( () => {
  
      if (isFirstInput.current) {
        isFirstInput.current = search === ''
        return 
      }
      
      if (search === '') {
        setError('No se puede buscar una pelicula sin nombre')
        return
      }
  
      if (search.match(/^\d+$/)) {
        setError('No se puede buscar una película solo con numeros')
        return
      }
  
      if (search.length < 3) {
        setError('La busqueda debe tener al menos 3 carateres')
        return
      }
  
      setError(null)
    }, [search])
  
    return { search, updateSearch, error }
  }