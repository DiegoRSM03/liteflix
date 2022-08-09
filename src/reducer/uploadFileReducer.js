import { componentScreen } from "components/UploadModal/componentScreen"

export const uploadFileReducer = (state, screen) => {
  let newState

  const dispatchedScreen = componentScreen[screen]
  console.log({ screen })
  console.log({ componentScreen })
  console.log({ dispatchedScreen })

  newState = {
    screen,
    component: dispatchedScreen.component,
    nextScreen: dispatchedScreen.nextScreen,
  }

  return newState
}
