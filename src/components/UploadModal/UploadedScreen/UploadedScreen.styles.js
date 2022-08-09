import styled from "styled-components/macro"

export const UploadedScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 90%;

  & > span:nth-child(2) {
    text-align: center;
  }

  @media (min-width: 800px) {
    width: 600px;
  }
`
