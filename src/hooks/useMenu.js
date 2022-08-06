import { useState } from "react"

export const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    toggleIsOpen,
  }
}
