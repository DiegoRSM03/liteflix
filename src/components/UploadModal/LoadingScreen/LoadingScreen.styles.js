import styled from "styled-components/macro"

export const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;

  width: 90%;

  & > span:nth-child(3) {
    align-self: flex-end;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    width: 600px;
  }
`

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.color.gray};

  width: 100%;
  height: 10px;
  overflow: hidden;
`

export const LinePrimaryColor = styled.div`
  animation: indeterminateAnimation 1s infinite linear;
  transform-origin: 0% 50%;

  background-color: ${(props) => props.theme.color.primary};

  width: 100%;
  height: 100%;

  @keyframes indeterminateAnimation {
    0% {
      transform: translateX(0) scaleX(0);
    }
    40% {
      transform: translateX(0) scaleX(0.4);
    }
    100% {
      transform: translateX(100%) scaleX(0.5);
    }
  }
`
