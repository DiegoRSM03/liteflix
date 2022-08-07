import { useState, useEffect } from "react"

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth <= 800)
    )
    setIsMobile(window.innerWidth <= 800)
  }, [])

  return { isMobile }
}
