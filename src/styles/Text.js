import styled from "styled-components"

export const Text = styled.span`
  color: white;
  font-weight: ${(props) => props.weight || "normal"};
`
