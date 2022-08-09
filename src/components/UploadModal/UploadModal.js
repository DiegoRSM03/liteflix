import { useContext, useRef } from "react"
import cs from "classnames"

import { UploadScreensContext } from "context"

import closeSvg from "assets/img/cerrar.svg"
import * as S from "./UploadModal.styles"

export const UploadModal = () => {
  const {
    isOpen,
    movieTitle,
    movieUrl,
    screen,
    component,
    nextScreen,
    uploadMovie,
    dispatch,
    setMovieTitle,
    setMovieUrl,
    toggleIsOpen,
  } = useContext(UploadScreensContext)
  const inputTitleRef = useRef()

  const handleUploadMovieClick = async () => {
    if (movieUrl && movieTitle) {
      if (screen === "loaded") uploadMovie()

      if (screen === "uploaded") {
        setMovieTitle("")
        setMovieUrl("")
        toggleIsOpen()
      }

      dispatch(nextScreen)
    }
  }

  const handleMovieTitleChange = ({ target }) => {
    setMovieTitle(target.value)
  }

  return (
    <S.Overlay className={cs({ open: isOpen })}>
      <S.UploadModal>
        {screen !== "uploaded" && <S.Header>Agregar película</S.Header>}
        <S.CloseIcon src={closeSvg} onClick={toggleIsOpen} />

        {component}

        {screen !== "uploaded" && (
          <S.InputTitle
            placeholder="TÍTULO"
            ref={inputTitleRef}
            value={movieTitle}
            onChange={(event) => handleMovieTitleChange(event)}
          />
        )}
        <S.UploadButton
          className={cs({ uploaded: movieTitle && movieUrl })}
          disabled={screen === "loading"}
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
