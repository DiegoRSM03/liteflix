import { useEffect, useState } from "react"
import axios from "axios"

// Idk why isMobile isn't working when i use it in line 27
// import { useDevice } from "hooks"

export const useRandomMovie = () => {
  const [currentRandomMovie, setCurrentRandomMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [bunchOfRandomMovies, setBunchOfRandomMovies] = useState([])
  const [alreadyShownMovies, setAlreadyShownMovies] = useState([])

  const changeMovieBackground = (url) => {
    const movieBackground = document.querySelector("#movie-background")
    const backgroundUrl =
      "https://image.tmdb.org/t/p/" +
      (window.innerWidth <= 800 ? "w500" : "original") +
      "/" +
      url

    movieBackground.setAttribute("src", backgroundUrl)
  }

  const getBunchOfRandomMovies = async () => {
    setIsLoading(true)

    const randomMovie = "/movie/now_playing"
    const url = `https://api.themoviedb.org/3${randomMovie}?api_key=6f26fd536dd6192ec8a57e94141f8b20`

    const response = await axios.get(url)
    const movies = response.data.results

    setBunchOfRandomMovies(movies)

    changeMovieBackground(movies[0].backdrop_path)
    setCurrentRandomMovie(movies[0])
    setAlreadyShownMovies([movies[0].id])

    setIsLoading(false)
  }

  const pickRandomMovie = () => {
    const movieNotShown = bunchOfRandomMovies.find(
      (movie) => !alreadyShownMovies.includes(movie.id)
    )
    const newAlreadyShownMovies = alreadyShownMovies

    console.log({ movieNotShown, alreadyShownMovies })
    changeMovieBackground(movieNotShown.backdrop_path)
    setCurrentRandomMovie(movieNotShown)
    setAlreadyShownMovies(newAlreadyShownMovies.push(movieNotShown.id))

    if (alreadyShownMovies.length === bunchOfRandomMovies.length)
      setAlreadyShownMovies([])
  }

  useEffect(() => {
    getBunchOfRandomMovies()
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => pickRandomMovie(), 8000)
    return () => clearInterval(intervalId)
  }, [bunchOfRandomMovies])

  return {
    currentRandomMovie,
    isLoading,
  }
}
