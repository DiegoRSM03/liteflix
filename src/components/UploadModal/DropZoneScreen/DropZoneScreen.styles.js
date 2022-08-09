import styled from "styled-components/macro"

export const DropZoneScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 90%;
  height: 80px;
  padding: 15px;
  border: 2px dashed white;

  @media (min-width: 800px) {
    width: 600px;
    height: 100px;
  }
`
