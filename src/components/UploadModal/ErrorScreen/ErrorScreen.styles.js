import styled from "styled-components/macro"

export const ErrorScreen = styled.div`
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

  background-color: ${(props) => props.theme.color.error};

  width: 100%;
  height: 10px;
`
