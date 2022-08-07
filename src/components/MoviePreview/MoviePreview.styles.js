import styled from "styled-components/macro"

export const MoviePreview = styled.div`
  background-image: url(https://image.tmdb.org/t/p/w500/${(props) =>
    props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  overflow: hidden;

  aspect-ratio: 327/172;
  width: 100%;
  height: auto;

  @media (min-width: 800px) {
    height: 145px;
  }
`

export const Overlay = styled.div`
  background-image: linear-gradient(to bottom, transparent 20%, black);

  position: relative;
  width: 100%;
  height: 100%;

  transition: 0.5s ease 0s;
  cursor: pointer;

  // Animation triggered when isOpen flag's true
  &.open {
    background-image: linear-gradient(
      to bottom,
      rgba(36, 36, 36, 0.7),
      rgba(36, 36, 36, 0.7)
    );

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
    transition: 0.3s ease 0s;
  }

  & > .title {
    left: 0;
    bottom: 32px;

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
    left: 24px;
  }

  & > .release-date {
    right: 24px;
  }
`

export const PlayButton = styled.button``
