import { Text } from "styles"
import * as S from "./LoadedScreen.styles"

export const LoadedScreen = () => {
  return (
    <S.LoadedScreen>
      <Text>100% CARGADO</Text>
      <S.ProgressBar />

      <S.DoneText>¡LISTO!</S.DoneText>
    </S.LoadedScreen>
  )
}
