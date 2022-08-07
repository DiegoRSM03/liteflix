import cs from "classnames"

import { useToggle } from "hooks"
import { Text } from "styles"

import * as S from "./MoviePreview.styles"

export const MoviePreview = ({ movieInfo }) => {
  const { isOpen, toggleIsOpen } = useToggle()

  return (
    <S.MoviePreview backgroundUrl={movieInfo.backdrop_path}>
      <S.Overlay className={cs({ open: isOpen })} onClick={toggleIsOpen}>
        <S.PlayButton />
        <Text className="title">{movieInfo.title}</Text>
        <Text size="14px" className="vote-average">
          {movieInfo.vote_average}
        </Text>
        <Text size="14px" className="release-date">
          {movieInfo.release_date.slice(0, 4)}
        </Text>
      </S.Overlay>
    </S.MoviePreview>
  )
}
