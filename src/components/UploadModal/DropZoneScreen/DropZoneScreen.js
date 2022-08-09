import { useCallback, useContext } from "react"
import { useDropzone } from "react-dropzone"

import { Text } from "styles"
import { useDevice } from "hooks"
import { UploadScreensContext } from "context"

import clipSvg from "assets/img/clip.svg"
import * as S from "./DropZoneScreen.styles"

export const DropZoneScreen = () => {
  const { isMobile } = useDevice()
  const { setIsUploaded } = useContext(UploadScreensContext)

  const onDrop = useCallback((acceptedFiles) => {
    const imageUrl = URL.createObjectURL(acceptedFiles[0])
    localStorage.setItem("imageUrl", imageUrl)
    setIsUploaded(true)
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg"],
      "image/svg": [".svg"],
    },
  })

  return (
    <S.DropZoneScreen {...getRootProps()}>
      <input {...getInputProps()} />

      <img src={clipSvg} alt="clip icon" />

      {isDragActive ? (
        <Text>Suelta tu archivo aqui</Text>
      ) : (
        <Text>
          Agregá un archivo {!isMobile && " o arrastralo y soltalo aquí"}
        </Text>
      )}
    </S.DropZoneScreen>
  )
}
