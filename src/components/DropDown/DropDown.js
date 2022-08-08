import { useContext } from "react"
import cs from "classnames"

import { useToggle } from "hooks"
import { MoviesByCategoryContext } from "context"
import { Text } from "styles"

import arrowDownSvg from "assets/img/down-arrow.svg"
import * as S from "./DropDown.styles"

export const DropDown = () => {
  const { currentCategory, availableCategories, changeToCategory } = useContext(
    MoviesByCategoryContext
  )
  const { isOpen, toggleIsOpen } = useToggle()

  const handleDropDownClick = () => {
    const movieList = document.querySelector("#movie-list")
    movieList.style.zIndex = isOpen ? "2" : "1"

    const dropdownModal = document.querySelector("#dropdown-modal")
    dropdownModal.style.zIndex = isOpen ? "1" : "2"

    toggleIsOpen()
  }

  const handleCategoryItemClick = (tag) => {
    changeToCategory(tag)
    handleDropDownClick()
  }

  const renderCategoryList = () => {
    return Object.values(availableCategories).map((category) => (
      <li
        onClick={() => handleCategoryItemClick(category.tag)}
        key={category.tag}
      >
        <Text
          weight={category.tag === currentCategory.tag ? "bold" : "normal"}
          size="16px"
        >
          {category.title}
        </Text>
      </li>
    ))
  }

  return (
    <S.DropDown>
      <Text size="18px">Ver:</Text>

      <div onClick={handleDropDownClick}>
        <Text size="18px" weight="bold">
          {currentCategory.title}
        </Text>

        <S.ArrowIcon
          src={arrowDownSvg}
          alt="Dropdown icon"
          className={cs({ open: isOpen })}
        />
      </div>

      <S.DropDownModal id="dropdown-modal" className={cs({ open: isOpen })}>
        {renderCategoryList()}
      </S.DropDownModal>
    </S.DropDown>
  )
}
