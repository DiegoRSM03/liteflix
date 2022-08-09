import { createContext, useReducer, useState } from "react"

import { useToggle } from "hooks"
import { uploadFileReducer } from "reducer"
import { DropZoneScreen } from "components"

const initialState = {
  screen: "dropzone",
  component: <DropZoneScreen />,
  nextScreen: "loading",
}

export const UploadScreensContext = createContext()

export const UploadScreensContextProvider = ({ children }) => {
  const [{ screen, component, nextScreen }, dispatch] = useReducer(
    uploadFileReducer,
    initialState
  )
  const [isUploaded, setIsUploaded] = useState(false)
  const { isOpen, toggleIsOpen } = useToggle()

  return (
    <UploadScreensContext.Provider
      value={{
        screen,
        component,
        nextScreen,
        dispatch,
        isUploaded,
        setIsUploaded,
        isOpen,
        toggleIsOpen,
      }}
    >
      {children}
    </UploadScreensContext.Provider>
  )
}
