import styled from "styled-components/macro"

export const Menu = styled.div`
  display: grid;
  place-content: center;

  position: fixed;
  z-index: 4;
  top: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(21, 21, 21, 0.95);
  transform: translateX(100%);
  transition: 0.5s ease 0s;

  width: 100vw;
  height: 100vh;

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 800px) {
    width: 761px;
    background-color: rgba(21, 21, 21, 0.9);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 65px;

  width: 90vw;
  height: 100vh;
  padding: 24px 0;

  @media (min-width: 800px) {
    gap: 72px;
    width: calc(761px - 10vw);
    padding: 35px 0;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: calc(72px - 65px);

  @media (min-width: 800px) {
    margin-bottom: calc(90px - 72px);
  }
`

export const ListItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;

  & > * {
    cursor: pointer;
  }
`
