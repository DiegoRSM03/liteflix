import styled from "styled-components"

export const Text = styled.span`
  color: white;
  font-weight: ${(props) => props.weight || "normal"};
  font-size: 18px;

  @media (min-width: 480px) {
    font-size: ${(props) => props.size || "1rem"};
  }
`
