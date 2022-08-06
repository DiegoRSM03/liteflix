import { Link } from "react-router-dom"

import { Flex, AppLogo, Text } from "styles"
import { BurgerMenu } from "utils"

import bellSvg from "assets/img/bell.svg"
import plusSvg from "assets/img/plus.svg"
import profileImage from "assets/img/profile-image.png"

import * as S from "./NavBar.styles"

export const NavBar = () => {
  return (
    <S.NavBar>
      <S.Container>
        <Flex gap="3">
          <AppLogo />

          <Link to="upload">
            <Text weight="bold">
              <img
                src={plusSvg}
                alt="plus icon"
                style={{ marginRight: "12px" }}
              />
              Agregar pelicula
            </Text>
          </Link>
        </Flex>

        <Flex gap="2">
          <BurgerMenu />

          <S.withBadge>
            <img src={bellSvg} alt="bell with notification badge" />
          </S.withBadge>

          <img src={profileImage} alt="user profile pic" />
        </Flex>
      </S.Container>
    </S.NavBar>
  )
}
