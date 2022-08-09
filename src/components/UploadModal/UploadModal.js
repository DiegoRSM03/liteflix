import cs from "classnames"
import { useContext } from "react"

import { UploadScreensContext } from "context"

import closeSvg from "assets/img/cerrar.svg"
import * as S from "./UploadModal.styles"

export const UploadModal = () => {
  const { isUploaded, isOpen, toggleIsOpen, component, nextScreen, dispatch } =
    useContext(UploadScreensContext)

  const handleUploadMovieClick = () => {
    if (isUploaded) dispatch(nextScreen)
  }

  return (
    <S.Overlay className={cs({ open: isOpen })}>
      <S.UploadModal>
        <S.Header>Agregar película</S.Header>
        <S.CloseIcon src={closeSvg} onClick={toggleIsOpen} />

        {component}

        <S.InputTitle placeholder="TÍTULO" />
        <S.UploadButton onClick={handleUploadMovieClick}>
          Subir película
        </S.UploadButton>
      </S.UploadModal>
    </S.Overlay>
  )
}
