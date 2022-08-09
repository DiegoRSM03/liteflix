import { useEffect, useState } from "react"
import { fetchMovieByCategory } from "services"

const availableCategories = {
  popular: {
    title: "Populares",
    endpoint: "/movie/popular",
    tag: "popular",
  },
  now_playing: {
    title: "En Cines",
    endpoint: "/movie/now_playing",
    tag: "now_playing",
  },
  top_rated: {
    title: "Mejores",
    endpoint: "/movie/top_rated",
    tag: "top_rated",
  },
  upcoming: {
    title: "Por Estrenar",
    endpoint: "/movie/upcoming",
    tag: "upcoming",
  },
  my_movies: {
    title: "Mis Peliculas",
    endpoint: "/user/movies",
    tag: "my_movies",
  },
}

export const useMoviesCategory = () => {
  const [currentCategory, setCurrentCategory] = useState(
    availableCategories["popular"]
  )
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const changeToCategory = (category) => {
    setCurrentCategory(availableCategories[category])
  }

  const getMoviesByCategory = async (category) => {
    setIsLoading(true)

    if (category.tag !== "my_movies") {
      const fetchedMovies = await fetchMovieByCategory(category.endpoint)
      setMovies(fetchedMovies)
    } else {
      setMovies(JSON.parse(localStorage.getItem("userMovies")))
    }

    setIsLoading(false)
  }

  useEffect(() => {
    getMoviesByCategory(currentCategory)
  }, [currentCategory])

  return {
    currentCategory,
    availableCategories,
    movies,
    isLoading,
    changeToCategory,
  }
}
