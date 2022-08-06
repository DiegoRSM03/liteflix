import { useState, useEffect } from "react"

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth <= 480)
    )
    setIsMobile(window.innerWidth <= 480)
  }, [])

  return { isMobile }
}
