import styled from "styled-components"

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;

  width: 100%;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: ${(props) => props.theme.container.width};
  max-width: ${(props) => props.theme.container.maxWidth};
  padding: 24px 0;

  @media (min-width: 480px) {
    padding: 35px 0;
  }
`

export const withBadge = styled.div`
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    right: 2px;

    background-color: ${(props) => props.theme.color.primary};
    border-radius: 50%;

    aspect-ratio: 1/1;
    width: 9px;
    height: auto;
  }
`
