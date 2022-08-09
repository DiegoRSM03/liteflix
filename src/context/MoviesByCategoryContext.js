import { useMoviesCategory } from "hooks"
import { createContext } from "react"

export const MoviesByCategoryContext = createContext()

export const MoviesByCategoryContextProvider = ({ children }) => {
  const values = useMoviesCategory()

  return (
    <MoviesByCategoryContext.Provider value={{ ...values }}>
      {children}
    </MoviesByCategoryContext.Provider>
  )
}
