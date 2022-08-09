import { createContext, useReducer, useState } from "react"

import { useToggle } from "hooks"
import { uploadFileReducer } from "reducer"
import { DropZoneScreen, ErrorScreen } from "components"

// const initialState = {
//   screen: "dropzone",
//   component: <DropZoneScreen />,
//   nextScreen: "loading",
// }

const initialState = {
  screen: "error",
  component: <ErrorScreen />,
  nextScreen: "dropzone",
}

export const UploadScreensContext = createContext()

export const UploadScreensContextProvider = ({ children }) => {
  const [{ screen, component, nextScreen }, dispatch] = useReducer(
    uploadFileReducer,
    initialState
  )
  const [movieTitle, setMovieTitle] = useState("")
  const [movieUrl, setMovieUrl] = useState("")
  const [isUploaded, setIsUploaded] = useState(false)
  const { isOpen, toggleIsOpen } = useToggle()

  const uploadMovie = async () => {
    const uploadedMovies = JSON.parse(
      localStorage.getItem("userMovies") || "[]"
    )
    uploadedMovies.push({ title: movieTitle, backdrop_path: movieUrl })

    localStorage.setItem("userMovies", JSON.stringify(uploadedMovies))
  }

  return (
    <UploadScreensContext.Provider
      value={{
        screen,
        component,
        nextScreen,
        movieTitle,
        movieUrl,
        isUploaded,
        isOpen,
        uploadMovie,
        dispatch,
        setMovieTitle,
        setMovieUrl,
        setIsUploaded,
        toggleIsOpen,
      }}
    >
      {children}
    </UploadScreensContext.Provider>
  )
}
