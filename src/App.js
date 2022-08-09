import { ThemeProvider } from "styled-components"
import { liteflixTheme } from "liteflixTheme"

import { MenuContextProvider, UploadScreensContextProvider } from "context"
import { Menu, NavBar } from "components"
import { HomePage } from "pages"

function App() {
  return (
    <ThemeProvider theme={liteflixTheme}>
      <UploadScreensContextProvider>
        <MenuContextProvider>
          <NavBar />
          <Menu />
        </MenuContextProvider>
        <HomePage />
      </UploadScreensContextProvider>
    </ThemeProvider>
  )
}

export default App
