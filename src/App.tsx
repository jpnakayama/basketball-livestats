import { ThemeProvider } from "styled-components";
import { FormProvider } from "./Contexts/FormContext";
import { PlayersAttributesProvider } from "./Contexts/PlayersContext";
import { Stats } from "./pages/Stats";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <FormProvider>
      <PlayersAttributesProvider>
        <Stats />      
      </PlayersAttributesProvider>  
      </FormProvider>
    </ThemeProvider>
  )
}

export default App
