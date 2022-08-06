import { createContext } from "react"
import { useMenu } from "hooks"

export const MenuContext = createContext()

export const MenuContextProvider = ({ children }) => {
  const { isOpen, toggleIsOpen } = useMenu()

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleIsOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
