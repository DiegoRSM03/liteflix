import { useContext } from "react"

import { MoviePreview } from "components"
import { MoviesByCategoryContext } from "context"

import * as S from "./MoviesColumn.styles"

export const MoviesColumn = () => {
  const { movies, isLoading } = useContext(MoviesByCategoryContext)

  return (
    <S.MoviesColumn id="movie-list">
      {!isLoading &&
        movies.map((movieInfo) => (
          <MoviePreview
            key={movieInfo.id || movieInfo.backdrop_path}
            movieInfo={movieInfo}
          />
        ))}
    </S.MoviesColumn>
  )
}
