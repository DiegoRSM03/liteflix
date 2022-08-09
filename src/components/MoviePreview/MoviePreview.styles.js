import styled from "styled-components/macro"

export const MoviePreview = styled.div`
  background-image: url(https://image.tmdb.org/t/p/w500/${(props) =>
    props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  overflow: hidden;

  position: relative;
  aspect-ratio: 327/172;
  width: 100%;
  height: auto;

  @media (min-width: 800px) {
    height: 145px;
  }
`

export const BackgroundOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  background-image: linear-gradient(to bottom, transparent 20%, black);

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding-top: 50px;

  transition: 0.2s ease 0s;
  opacity: 1;

  &.open {
    opacity: 0;
  }
`

export const Overlay = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(36, 36, 36, 0.7),
    rgba(36, 36, 36, 0.7)
  );

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transition: 0.5s ease 0s;
  cursor: pointer;
  opacity: 0;

  // Animation triggered when isOpen flag's true
  &.open {
    opacity: 1;

    & > .title {
      bottom: 60px;
    }

    & > .vote-average,
    & > .release-date {
      bottom: 24px;
      opacity: 1;
    }
  }

  // Text which will be animated
  & > * {
    position: absolute;
    transition: 0.25s ease 0s;
  }

  & > .title {
    display: flex;
    align-items: center;
    gap: 12px;

    left: 0;
    bottom: 70px;

    width: 100%;
    padding: 0 3ch;
    text-align: center;
  }

  & > .vote-average,
  & > .release-date {
    bottom: 34px;
    opacity: 0;
  }

  & > .vote-average {
    display: flex;
    gap: 6px;

    left: 24px;
  }

  & > .release-date {
    right: 24px;
  }
`

const PlayButton = styled.div`
  position: relative;

  background-color: rgba(36, 36, 36, 0.5);
  border-radius: 50%;
  border: 1px solid white;

  aspect-ratio: 1/1;
  height: auto;

  &::after {
    content: "";
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;
    clip-path: polygon(100% 50%, 0 0, 0 100%);
  }
`

export const BigPlayButton = styled(PlayButton)`
  width: 40px;

  &::after {
    width: 10px;
    height: 14px;
  }
`

export const SmallPlayButton = styled(PlayButton)`
  width: 27px;

  &::after {
    width: 7px;
    height: 9px;
  }

  &:hover::after {
    background-color: ${(props) => props.theme.color.dark};
    border-color: ${(props) => props.theme.color.dark};
  }

  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    border-color: ${(props) => props.theme.color.dark};
  }
`

export const StarIcon = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );

  aspect-ratio: 1/1;
  width: 12px;
  height: auto;
`
