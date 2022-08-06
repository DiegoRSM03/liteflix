import { useContext } from "react"
import cs from "classnames"

import { MenuContext } from "context"

import * as S from "./BurgerMenu.styles"

export const BurgerMenu = () => {
  const { isOpen, toggleIsOpen } = useContext(MenuContext)

  return (
    <S.BurgerMenu onClick={toggleIsOpen} className={cs({ open: isOpen })}>
      <S.WhiteLine />
      <S.WhiteLine />
      <S.WhiteLine />
    </S.BurgerMenu>
  )
}
