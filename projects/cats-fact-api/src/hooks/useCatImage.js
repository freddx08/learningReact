import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imageURL, setImageURL] = useState()

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

  return { imageURL }
}
