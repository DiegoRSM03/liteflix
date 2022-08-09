import { UploadScreensContext } from "context"
import { useContext, useEffect } from "react"
import { Text } from "styles"

import * as S from "./LoadingScreen.styles"

export const LoadingScreen = () => {
  const { dispatch, nextScreen } = useContext(UploadScreensContext)

  const handleCancelClick = () => {
    dispatch("dropzone")
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => dispatch(nextScreen), 4000)
    return () => clearTimeout(timeoutId)
  })

  return (
    <S.LoadingScreen>
      <Text>Cargando...</Text>

      <S.ProgressBar>
        <S.LinePrimaryColor />
      </S.ProgressBar>

      <Text onClick={handleCancelClick}>Cancelar</Text>
    </S.LoadingScreen>
  )
}
