import { useState } from "react"
import useSWR from "swr"

import { useDevice } from "hooks"

export const useRandomMovie = () => {
  const [currentRandomMovie, setCurrentRandomMovie] = useState({})
  const { isMobile } = useDevice()
  let alreadyShownMovies = []

  const { data, error } = useSWR("/movie/now_playing", {
    refreshInterval: 0,
    onSuccess: (data) => {
      pickRandomMovie(data.results)
      setInterval(() => pickRandomMovie(data.results), 10000)
    },
  })

  const isLoading = !error && !data

  const pickRandomMovie = (movieGroup) => {
    const quantityMovies = movieGroup.length

    let newMoviePicked = false
    let randomNumber = 0
    let pickedMovie = {}

    do {
      randomNumber = Math.floor(Math.random() * quantityMovies - 1) + 1
      pickedMovie = movieGroup[randomNumber]
      newMoviePicked = alreadyShownMovies.includes(pickedMovie.id)
    } while (newMoviePicked)

    alreadyShownMovies.push(movieGroup[randomNumber].id)
    if (alreadyShownMovies.length === quantityMovies) alreadyShownMovies = []

    const movieBackground = document.querySelector("#movie-background")
    const backgroundUrl =
      "https://image.tmdb.org/t/p/" +
      (isMobile ? "w500" : "original") +
      "/" +
      movieGroup[randomNumber].backdrop_path

    movieBackground.style.backgroundImage = `url(${backgroundUrl})`

    setCurrentRandomMovie(movieGroup[randomNumber])
  }

  return {
    currentRandomMovie,
    isLoading,
  }
}
