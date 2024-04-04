import { useEffect, useState } from 'react'
import { getRandomFact } from '../servives/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // recuperar el hecho aleatorio
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
