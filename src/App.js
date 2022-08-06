import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { liteflixTheme } from "liteflixTheme"

import { MenuContextProvider } from "context"
import { Menu, NavBar } from "components"
import { Upload } from "pages"

function App() {
  return (
    <ThemeProvider theme={liteflixTheme}>
      <BrowserRouter>
        <MenuContextProvider>
          <NavBar />
          <Menu />
        </MenuContextProvider>

        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/" element={<>Home Page</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
