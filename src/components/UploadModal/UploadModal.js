import { useContext, useRef } from "react"
import cs from "classnames"

import { UploadScreensContext } from "context"

import closeSvg from "assets/img/cerrar.svg"
import * as S from "./UploadModal.styles"

export const UploadModal = () => {
  const {
    isUploaded,
    isOpen,
    movieTitle,
    screen,
    component,
    nextScreen,
    dispatch,
    setMovieTitle,
    toggleIsOpen,
  } = useContext(UploadScreensContext)
  const inputTitleRef = useRef()

  const handleUploadMovieClick = async () => {
    if (isUploaded && movieTitle) {
      dispatch(nextScreen)
    }
  }

  const handleMovieTitleChange = ({ target }) => {
    setMovieTitle(target.value)
  }

  return (
    <S.Overlay className={cs({ open: isOpen })}>
      <S.UploadModal>
        <S.Header>Agregar película</S.Header>
        <S.CloseIcon src={closeSvg} onClick={toggleIsOpen} />

        {component}

        <S.InputTitle
          placeholder="TÍTULO"
          ref={inputTitleRef}
          value={movieTitle}
          onChange={(event) => handleMovieTitleChange(event)}
        />
        <S.UploadButton
          className={cs({ uploaded: isUploaded })}
          onClick={handleUploadMovieClick}
        >
          {screen === "uploaded"
            ? "Ir al home"
            : screen === "loaded"
            ? "Subir película"
            : "Siguiente"}
        </S.UploadButton>
      </S.UploadModal>
    </S.Overlay>
  )
}
