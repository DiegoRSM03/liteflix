import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.gap}rem;
`
