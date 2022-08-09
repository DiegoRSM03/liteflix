import {
  DropZoneScreen,
  ErrorScreen,
  LoadingScreen,
  LoadedScreen,
  UploadedScreen,
} from "components"

export const componentScreen = {
  dropzone: {
    component: <DropZoneScreen />,
    nextScreen: "loading",
  },
  error: {
    component: <ErrorScreen />,
    nextScreen: "dropzone",
  },
  loading: {
    component: <LoadingScreen />,
    nextScreen: "loaded",
  },
  loaded: {
    component: <LoadedScreen />,
    nextScreen: "uploaded",
  },
  uploaded: {
    component: <UploadedScreen />,
    nextScreen: "dropzone",
  },
}
