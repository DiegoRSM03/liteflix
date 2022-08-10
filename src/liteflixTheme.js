import {
  leftFadeIn,
  topFadeIn,
  rightFadeIn,
  kenBurnsIn,
} from "styles/animations"

export const liteflixTheme = {
  color: {
    primary: "#64EEBC",
    dark: "#242424",
    gray: "rgba(255, 255, 255, .5)",
    error: "#FF0000",
    transparent: "rgba(36, 36, 36, .5)",
  },
  container: {
    width: "90%",
    maxWidth: "1200px",
  },
  animation: {
    leftFadeIn,
    topFadeIn,
    rightFadeIn,
    kenBurnsIn,
  },
}
