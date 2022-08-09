import styled from "styled-components/macro"

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(36, 36, 36, 0.9);

  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  transition: 0.3s ease-in 0s;
  /* opacity: 0; */

  &.open {
    /* opacity: 1; */
    /* z-index: 5; */
  }
`

export const UploadModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 72px;

  position: relative;

  color: white;
  background-color: ${(props) => props.theme.color.dark};

  width: 100%;
  height: 100vh;

  @media (min-width: 800px) {
    width: 750px;
    height: 440px;
    gap: 48px;
  }
`

export const Header = styled.h2`
  color: ${(props) => props.theme.color.primary};
  size: 22px;

  @media (min-width: 800px) {
    size: 20px;
  }
`

export const CloseIcon = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;

  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`

export const InputTitle = styled.input`
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid white;

  width: 90%;
  text-align: center;
  padding-bottom: 10px;

  &:active {
    outline: 0;
    border-bottom: 1px solid white;
  }

  &:focus {
    outline: 0;
    border-bottom: 1px solid white;
  }

  @media (min-width: 800px) {
    width: 250px;
  }
`

export const UploadButton = styled.button`
  width: 90%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px 0;

  &.uploaded {
    background-color: white;
  }

  @media (min-width: 800px) {
    width: 250px;
  }
`
