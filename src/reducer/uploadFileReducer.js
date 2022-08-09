import { componentScreen } from "components/UploadModal/componentScreen"

export const uploadFileReducer = (state, screen) => {
  let newState

  const dispatchedScreen = componentScreen[screen]

  newState = {
    screen,
    component: dispatchedScreen.component,
    nextScreen: dispatchedScreen.nextScreen,
  }

  return newState
}
