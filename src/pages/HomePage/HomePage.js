import { MovieInformation, MoviesColumn } from "components"
import { useDevice } from "hooks"
import * as S from "./HomePage.styles"

const HomePage = () => {
  const { isMobile } = useDevice()

  return (
    <S.HomePage>
      <S.MovieBackground id="movie-background">
        <S.DarkerBackround>
          <S.Container>
            <MovieInformation />
            {!isMobile && <MoviesColumn />}
          </S.Container>
        </S.DarkerBackround>
      </S.MovieBackground>

      {isMobile && <MoviesColumn />}
    </S.HomePage>
  )
}

export default HomePage
