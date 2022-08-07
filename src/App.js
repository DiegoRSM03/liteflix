import { SWRConfig } from "swr"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ThemeProvider } from "styled-components"
import { liteflixTheme } from "liteflixTheme"

import { MenuContextProvider } from "context"
import { Menu, NavBar } from "components"
import { HomePage, Upload } from "pages"

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
        <BrowserRouter>
          <MenuContextProvider>
            <NavBar />
            <Menu />
          </MenuContextProvider>

          <Routes>
            <Route path="/upload" element={<Upload />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default App
