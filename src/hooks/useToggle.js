import { useState } from "react"

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    toggleIsOpen,
  }
}
