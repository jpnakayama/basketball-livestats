import { ThemeProvider } from "styled-components";
import { FormProvider } from "./Contexts/FormContext";
import { Stats } from "./pages/Stats";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <FormProvider>
        <Stats />
      </FormProvider>
    </ThemeProvider>
  )
}

export default App
