import styled from "styled-components/macro"

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(36, 36, 36, 0.9);

  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  transition: 0.3s ease-in 0s;
  opacity: 0;

  &.open {
    opacity: 1;
    z-index: 5;
  }
`

export const UploadModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: ${(props) => props.theme.color.dark};

  width: 100%;
  height: 100vh;

  @media (min-width: 800px) {
    width: 750px;
    height: 440px;
  }
`
