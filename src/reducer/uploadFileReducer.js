import { componentScreen } from "components/UploadModal/componentScreen"

export const uploadFileReducer = (state, screen) => {
  const dispatchedScreen = componentScreen[screen]

  return {
    screen,
    component: dispatchedScreen,
  }
}
