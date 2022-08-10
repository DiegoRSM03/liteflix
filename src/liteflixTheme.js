import { css } from "styled-components"

const leftFadeIn = css`
  animation: leftFadeIn 0.5s ease;

  @keyframes leftFadeIn {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const topFadeIn = css`
  animation: topFadeIn 0.5s ease;

  @keyframes topFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`

const rightFadeIn = css`
  animation: rightFadeIn 0.5s ease;

  @keyframes rightFadeIn {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`

const kenBurnsIn = css`
  animation: kenBurnsIn 1.2s ease;

  @keyframes kenBurnsIn {
    0% {
      opacity: 0;
      clip-path: inset(5%);
      transform: scale(111.11%);
    }
    100% {
      opacity: 1;
      clip-path: inset(0);
      transform: scale(1);
    }
  }
`

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
