import { UploadScreensContext } from "context"
import { useContext } from "react"
import { Text } from "styles"
import * as S from "./ErrorScreen.styles"

export const ErrorScreen = () => {
  const { dispatch } = useContext(UploadScreensContext)

  const handleRetryClick = () => {
    dispatch("dropzone")
  }

  return (
    <S.ErrorScreen>
      <Text>¡ERROR! NO SE PUDO CARGAR LA PELÍCULA</Text>
      <S.ProgressBar />
      <Text weight="bold" onClick={handleRetryClick}>
        REINTENTAR
      </Text>
    </S.ErrorScreen>
  )
}
