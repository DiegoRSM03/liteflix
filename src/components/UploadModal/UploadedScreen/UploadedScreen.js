import { Text } from "styles"
import * as S from "./UploadedScreen.styles"

export const UploadedScreen = () => {
  return (
    <S.UploadedScreen>
      <Text weight="bold" size="24px">
        ¡Felicitaciones!
      </Text>
      <Text size="20px">Liteflix The Movie fue correctamente subida.</Text>
    </S.UploadedScreen>
  )
}
