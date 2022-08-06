import styled from "styled-components"

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

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

  // When the device is mobile, it will expand to cover the entire remaining space
  @media (max-width: 480px) {
    & > div {
      width: 100%;
    }
  }
`
