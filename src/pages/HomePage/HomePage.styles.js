import styled from "styled-components/macro"

export const HomePage = styled.section``

export const MovieBackground = styled.div`
  // background-image: (value which will be updated by javascript in component MovieInformation)
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const DarkerBackround = styled.div`
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
