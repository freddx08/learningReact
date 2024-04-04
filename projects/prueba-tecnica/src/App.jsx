import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './servives/facts'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  // recuperar el hecho aleatorio
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  // recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`)
      .then((res) => res)
      .then((response) => {
        const { url } = response
        setImageURL(url)
      })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact(setFact)
    setFact(newFact)
  }

  // renderizado de la App
  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageURL && (
        <img src={imageURL} alt='Imagen obtenida de un hecho aleatorio' />
      )}
    </main>
  )
}
