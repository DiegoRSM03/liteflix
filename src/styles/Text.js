import styled from "styled-components/macro"

export const Text = styled.span`
  color: white;
  font-weight: ${(props) => props.weight || "normal"};
  font-size: ${(props) => props.size || "1rem"};
`
