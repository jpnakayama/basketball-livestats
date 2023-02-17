import { ThemeProvider } from "styled-components";
import { Stats } from "./pages/Stats";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />


      <Stats />
    </ThemeProvider>
  )
}

export default App
