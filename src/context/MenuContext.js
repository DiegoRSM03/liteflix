import { createContext } from "react"
import { useToggle } from "hooks"

export const MenuContext = createContext()

export const MenuContextProvider = ({ children }) => {
  const { isOpen, toggleIsOpen } = useToggle()

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
