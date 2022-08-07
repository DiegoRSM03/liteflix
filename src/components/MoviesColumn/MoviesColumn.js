import { DropDown, MoviePreview } from "components"
import { useMoviesCategory } from "hooks"

import * as S from "./MoviesColumn.styles"

export const MoviesColumn = () => {
  const { movies, isLoading } = useMoviesCategory()
  console.log({ movies })

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
