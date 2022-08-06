import { useContext } from "react"
import cs from "classnames"

import { MenuContext } from "context"
import { useDevice } from "hooks"
import { AddMovieButton, BurgerMenu } from "utils"
import { AppLogo, Flex, Text, WithBadge } from "styles"

import bellSvg from "assets/img/bell.svg"
import profileImage from "assets/img/profile-image.png"
import * as S from "./Menu.styles"

const listItems = [
  "Inicio",
  "Series",
  "Peliculas",
  "Agregadas Recientemente",
  "Populares",
  "Mis peliculas",
  "Mi lista",
]

export const Menu = () => {
  const { isOpen } = useContext(MenuContext)
  const { isMobile } = useDevice()

  return (
    <S.Menu className={cs({ open: isOpen })}>
      <S.Container>
        <S.Header>
          <BurgerMenu />

          {!isMobile && (
            <Flex gap="2">
              <WithBadge>
                <img src={bellSvg} alt="bell with notification badge" />
              </WithBadge>

              <img src={profileImage} alt="user profile pic" />
            </Flex>
          )}

          {isMobile && (
            <>
              <AppLogo />
              <img src={profileImage} alt="user profile pic" />
            </>
          )}
        </S.Header>

        <S.ListItems>
          {listItems.map((list) => (
            <Text key={list} size="22px">
              {list}
            </Text>
          ))}
        </S.ListItems>

        <AddMovieButton size="22px" />

        <Text size="22px">Cerrar Sesión</Text>
      </S.Container>
    </S.Menu>
  )
}
