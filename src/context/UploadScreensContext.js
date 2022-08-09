import { createContext, useReducer } from "react"

import { useToggle } from "hooks"
import { uploadFileReducer } from "reducer"
import { DropZoneScreen } from "components"

const initialState = {
  screen: "dropzone",
  component: <DropZoneScreen />,
}

export const UploadScreensContext = createContext()

export const UploadScreensContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(uploadFileReducer, initialState)
  const { isOpen, toggleIsOpen } = useToggle()

  return (
    <UploadScreensContext.Provider
      value={{
        data,
        dispatch,
        isOpen,
        toggleIsOpen,
      }}
    >
      {children}
    </UploadScreensContext.Provider>
  )
}
