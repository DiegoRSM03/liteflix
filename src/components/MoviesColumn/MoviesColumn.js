import { useContext } from "react"

import { MoviePreview } from "components"
import { MoviesByCategoryContext } from "context"

import { Text } from "styles"
import sadFaceSvg from "assets/img/sad-face.png"

import * as S from "./MoviesColumn.styles"

export const MoviesColumn = () => {
  const { movies, isLoading } = useContext(MoviesByCategoryContext)

  const renderSkeleton = () => {
    return [1, 2, 3, 4].map((number) => <S.MovieSkeleton key={number} />)
  }

  const renderSadFace = () => {
    return (
      <>
        <img src={sadFaceSvg} />
        <Text style={{ textAlign: "center" }}>
          Todavia no agregaste ninguna pelicula
        </Text>
      </>
    )
  }

  const renderMovies = () => {
    return movies.map((movieInfo) => (
      <MoviePreview
        key={movieInfo.id || movieInfo.backdrop_path}
        movieInfo={movieInfo}
      />
    ))
  }

  return (
    <S.MoviesColumn id="movie-list">
      {isLoading
        ? renderSkeleton()
        : !movies
        ? renderSadFace()
        : renderMovies()}
    </S.MoviesColumn>
  )
}
