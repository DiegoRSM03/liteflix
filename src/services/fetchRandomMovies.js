import axios from "axios"

export const fetchRandomMovies = async () => {
  const randomMovie = "/movie/now_playing"
  const url = `https://api.themoviedb.org/3${randomMovie}?api_key=6f26fd536dd6192ec8a57e94141f8b20`

  const response = await axios.get(url)
  const movies = response.data.results

  return movies
}
