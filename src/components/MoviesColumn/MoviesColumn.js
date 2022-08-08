import { useContext } from "react"

import { DropDown, MoviePreview } from "components"
import { MoviesByCategoryContext } from "context"

import * as S from "./MoviesColumn.styles"

export const MoviesColumn = () => {
  const { movies, isLoading } = useContext(MoviesByCategoryContext)

  return (
    <S.MovieColumn>
      <S.Header>
        <DropDown />
      </S.Header>

      <S.Column id="movie-list">
        {!isLoading &&
          movies.map((movieInfo) => (
            <MoviePreview key={movieInfo.id} movieInfo={movieInfo} />
          ))}
      </S.Column>
    </S.MovieColumn>
  )
}
