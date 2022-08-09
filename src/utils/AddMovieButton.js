import { useContext } from "react"

import { Text } from "styles"
import { UploadScreensContext } from "context"

import plusSvg from "assets/img/plus.svg"

export const AddMovieButton = ({ size }) => {
  const { toggleIsOpen } = useContext(UploadScreensContext)

  const handleAddMovieClick = () => {
    toggleIsOpen()
  }

  return (
    <Text
      weight="bold"
      size={size || "18px"}
      onClick={handleAddMovieClick}
      style={{ cursor: "pointer" }}
    >
      <img src={plusSvg} alt="plus icon" style={{ marginRight: "12px" }} />
      Agregar pelicula
    </Text>
  )
}
