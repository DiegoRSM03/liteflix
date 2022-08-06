import { Link } from "react-router-dom"
import { Text } from "styles"

import plusSvg from "assets/img/plus.svg"

export const AddMovieButton = ({ size }) => {
  return (
    <Link to="upload">
      <Text weight="bold" size={size || "18px"}>
        <img src={plusSvg} alt="plus icon" style={{ marginRight: "12px" }} />
        Agregar pelicula
      </Text>
    </Link>
  )
}
