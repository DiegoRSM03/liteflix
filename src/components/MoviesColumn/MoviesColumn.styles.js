import styled from "styled-components/macro"

export const MoviesColumn = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;

  position: relative;
  z-index: 2;
  width: 100%;

  @media (min-width: 480px) {
    gap: 20px;
    max-height: 650px;
    overflow: auto;
  }

  ${(props) => props.theme.animation.rightFadeIn}
`

export const MovieSkeleton = styled.div`
  border-radius: 4px;

  position: relative;
  aspect-ratio: 327/172;
  width: 100%;
  height: auto;

  position: relative;

  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;

  background: #f6f7f8;
  background: linear-gradient(to right, #fafafa 8%, #c1c1c1 38%, #fafafa 54%);
  background-size: 200% 200%;

  @media (min-width: 800px) {
    height: 145px;
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`
