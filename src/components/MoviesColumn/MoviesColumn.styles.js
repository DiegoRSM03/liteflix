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
`
