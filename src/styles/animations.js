import { css } from "styled-components"

export const leftFadeIn = css`
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

export const topFadeIn = css`
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

export const rightFadeIn = css`
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

export const kenBurnsIn = css`
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
