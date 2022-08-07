import { Button, Text } from "styles"
import { useRandomMovie } from "hooks"

import playSvg from "assets/img/play.svg"
import plusSvg from "assets/img/plus.svg"
import * as S from "./MovieInformation.styles"

export const MovieInformation = () => {
  const { currentRandomMovie } = useRandomMovie()

  return (
    <S.MovieInformation>
      <Text>
        Original de <b>liteflix</b>
      </Text>

      <S.Title size="20px">{currentRandomMovie.title}</S.Title>

      <S.ResponsiveHorToVer>
        <Button>
          <img src={playSvg} alt="play icon" />
          Reproducir
        </Button>

        <Button bordered>
          <img src={plusSvg} alt="plus icon" />
          Mi lista
        </Button>
      </S.ResponsiveHorToVer>
    </S.MovieInformation>
  )
}
