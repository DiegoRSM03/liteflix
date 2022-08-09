import { SWRConfig } from "swr"

import { ThemeProvider } from "styled-components"
import { liteflixTheme } from "liteflixTheme"

import { MenuContextProvider, UploadScreensContextProvider } from "context"
import { Menu, NavBar } from "components"
import { HomePage } from "pages"

// Fetcher function which useSWR will use
const fetcher = (resource, init) =>
  fetch(
    `https://api.themoviedb.org/3${resource}?api_key=6f26fd536dd6192ec8a57e94141f8b20`,
    init
  ).then((res) => res.json())

function App() {
  return (
    <ThemeProvider theme={liteflixTheme}>
      <SWRConfig
        value={{
          refreshInterval: 0,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          fetcher,
        }}
      >
        <UploadScreensContextProvider>
          <MenuContextProvider>
            <NavBar />
            <Menu />
          </MenuContextProvider>
          <HomePage />
        </UploadScreensContextProvider>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default App
