import styled from "styled-components"

export const StyledAppLogo = styled.span`
  color: ${(props) => props.theme.color.primary};
  font-size: 28px;
  letter-spacing: 4px;

  & > span:nth-child(1) {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    font-size: 34px;
  }
`

export const AppLogo = () => {
  return (
    <StyledAppLogo>
      <span>LITE</span>
      <span>FLIX</span>
    </StyledAppLogo>
  )
}
