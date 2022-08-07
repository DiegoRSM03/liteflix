import { useState } from "react"
import useSWR from "swr"

export const useMoviesCategory = () => {
  const availableCategories = {
    popular: {
      title: "Populares",
      endpoint: "/movie/popular",
      tag: "popular",
    },
    now_playing: {
      title: "En Taquilla",
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
  }
  const [currentCategory, setCurrentCategory] = useState(
    availableCategories["popular"]
  )
  const { data, error } = useSWR(currentCategory.endpoint)
  const isLoading = !data && !error

  const changeToCategory = (category) => {
    setCurrentCategory(availableCategories[category])
  }

  return {
    currentCategory,
    availableCategories,
    isLoading,
    movies: data?.results.slice(-4),
    changeToCategory,
  }
}
