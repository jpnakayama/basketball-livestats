import { Header } from "../../components/Header";
import { PlayersChart } from "../../components/PlayersChart";
import { GameInfoDisplay, StatsPage } from "./styles";
import { useContext } from "react";
import { FormContext } from "../../Contexts/FormContext";

export function Stats() {
  
  const { formValues } = useContext(FormContext)

  return (
    <div>
      <Header />

      <StatsPage>
        <GameInfoDisplay>
          <h2>{formValues.timeMandante} x {formValues.timeVisitante}</h2>
          <div>
            <h3>Competição: {formValues.competicao}</h3>
            <h3>Categoria: {formValues.categoria}</h3>
            <h3>Local: {formValues.local}</h3>
            <h3>Data: {formValues.gameDate}</h3>
          </div>
        </GameInfoDisplay>

        <PlayersChart />

      </StatsPage>

    </div>
  )
}