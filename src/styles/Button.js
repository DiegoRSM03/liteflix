import styled from "styled-components/macro"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  color: white;
  background-color: ${(props) => props.theme.color.dark};
  border: ${(props) => (props.bordered ? "1px solid white " : "none")};

  width: 248px;
  height: 56px;
  transition: 0.3s ease 0s;

  &:hover {
    background-color: #151515;
  }
`
