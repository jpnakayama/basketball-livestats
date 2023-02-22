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
        {formValues.homeTeam != '' && (
        <GameInfoDisplay>
          <h2>{formValues.awayTeam} @ {formValues.homeTeam}</h2>
          <div>
            <h3>Competição: {formValues.league}</h3>
            <h3>Categoria: {formValues.grade}</h3>
            <h3>Local: {formValues.venue}</h3>
            <h3>Data: {formValues.gameDate}</h3>
          </div>
        </GameInfoDisplay>
        )}

        <PlayersChart />

      </StatsPage>

    </div>
  )
}