import { DropDown, MoviesColumn } from "components"
import { MoviesByCategoryContextProvider } from "context"

import * as S from "./MovieCategories.styles"

export const MovieCategories = () => {
  return (
    <S.MovieCategories>
      <MoviesByCategoryContextProvider>
        <S.Header>
          <DropDown />
        </S.Header>

        <MoviesColumn />
      </MoviesByCategoryContextProvider>
    </S.MovieCategories>
  )
}
