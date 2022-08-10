import styled from "styled-components/macro"

export const HomePage = styled.section``

export const FullInitialViewport = styled.div`
  position: relative;

  width: 100%;
`

export const MovieBackground = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  ${(props) => props.theme.animation.kenBurnsIn}
`

export const DarkerBackround = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    background-image: linear-gradient(
      to top,
      ${(props) => props.theme.color.dark},
      transparent 80%
    );
  }
  @media (min-width: 800px) {
    background-color: rgba(21, 21, 21, 0.2);
  }
`

export const Container = styled.div`
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.theme.container.width};
  max-width: ${(props) => props.theme.container.maxWidth};
  height: 100%;
  margin: 0 auto;

  @media (min-width: 800px) {
    flex-direction: row;
  }

  @media (max-width: 800px) {
    gap: 8rem;
  }
`
