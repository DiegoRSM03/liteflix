import styled from "styled-components/macro"

export const MovieInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  width: 100%;
  height: 65vh;

  @media (min-width: 800px) {
    align-items: flex-start;
    height: 100vh;
    padding-bottom: 162px;
  }
`

export const ResponsiveHorToVer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 24px;
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme.color.primary};
  font-size: 76px;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 120px;
    text-align: left;
  }
`
