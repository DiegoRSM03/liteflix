import { MovieInformation, MoviesColumn } from "components"
import { useDevice } from "hooks"
import { MoviesByCategoryContextProvider } from "context"

import * as S from "./HomePage.styles"

const HomePage = () => {
  const { isMobile } = useDevice()

  return (
    <S.HomePage>
      <S.MovieBackground id="movie-background">
        <S.DarkerBackround>
          <S.Container>
            <MovieInformation />
            <MoviesByCategoryContextProvider>
              {!isMobile && <MoviesColumn />}
            </MoviesByCategoryContextProvider>
          </S.Container>
        </S.DarkerBackround>
      </S.MovieBackground>

      {isMobile && (
        <MoviesByCategoryContextProvider>
          <MoviesColumn />
        </MoviesByCategoryContextProvider>
      )}
    </S.HomePage>
  )
}

export default HomePage
