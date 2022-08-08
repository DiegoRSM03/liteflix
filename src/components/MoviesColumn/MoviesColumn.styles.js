import styled from "styled-components/macro"

export const MoviesColumn = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;

  position: relative;
  width: 100%;

  @media (min-width: 480px) {
    gap: 20px;
  }
`
