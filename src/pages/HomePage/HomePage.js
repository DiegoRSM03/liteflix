import { MovieInformation, MovieCategories, UploadModal } from "components"
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
            {!isMobile && <MovieCategories />}
          </S.Container>
        </S.DarkerBackround>
      </S.MovieBackground>

      {isMobile && <MovieCategories />}

      <UploadModal />
    </S.HomePage>
  )
}

export default HomePage
