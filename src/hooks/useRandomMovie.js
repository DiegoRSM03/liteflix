import { useEffect, useState } from "react"
import axios from "axios"

// Idk why isMobile isn't working when i use it in line 27
// import { useDevice } from "hooks"

export const useRandomMovie = () => {
  const [currentRandomMovie, setCurrentRandomMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [bunchOfRandomMovies, setBunchOfRandomMovies] = useState([])

  const getBunchOfRandomMovies = async () => {
    setIsLoading(true)

    const randomMovie = "/movie/now_playing"
    const url = `https://api.themoviedb.org/3${randomMovie}?api_key=6f26fd536dd6192ec8a57e94141f8b20`
    const response = await axios.get(url)

    const movies = response.data.results

    setBunchOfRandomMovies(movies)
    setCurrentRandomMovie(movies[0])

    const movieBackground = document.querySelector("#movie-background")
    const backgroundUrl =
      "https://image.tmdb.org/t/p/" +
      (window.innerWidth <= 800 ? "w500" : "original") +
      "/" +
      movies[0].backdrop_path

    movieBackground.style.backgroundImage = `url(${backgroundUrl})`
    movieBackground.setAttribute("src", backgroundUrl)

    setIsLoading(false)
  }

  useEffect(() => {
    getBunchOfRandomMovies()
  }, [])

  return {
    currentRandomMovie,
    isLoading,
  }
}
