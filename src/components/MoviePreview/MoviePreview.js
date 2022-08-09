import cs from "classnames"

import { useToggle } from "hooks"
import { Text } from "styles"

import * as S from "./MoviePreview.styles"

export const MoviePreview = ({ movieInfo }) => {
  const { isOpen, toggleIsOpen } = useToggle()

  return (
    <S.MoviePreview>
      <S.BackgroundImage
        alt={`${movieInfo.title} background image`}
        src={
          movieInfo.isUserMovie
            ? movieInfo.backdrop_path
            : `https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`
        }
      />

      <S.BackgroundOverlay className={cs({ open: isOpen })}>
        <S.BigPlayButton />
        <Text className="title">{movieInfo.title}</Text>
      </S.BackgroundOverlay>

      <S.Overlay
        className={cs({ open: isOpen })}
        onMouseEnter={toggleIsOpen}
        onMouseLeave={toggleIsOpen}
      >
        <Text weight="bold" className="title">
          <S.SmallPlayButton />
          {movieInfo.title}
        </Text>

        {!movieInfo.isUserMovie && (
          <>
            <Text size="14px" className="vote-average">
              <S.StarIcon />
              {movieInfo.vote_average}
            </Text>
            <Text size="14px" className="release-date">
              {movieInfo.release_date.slice(0, 4)}
            </Text>
          </>
        )}
      </S.Overlay>
    </S.MoviePreview>
  )
}
