import { GameInfoTab } from "../../styles/components/GameInfoTab";
import { PlayersChart } from "../../styles/components/PlayersChart";
import { NewPlayerButton, StatsPage } from "./styles";

export function Stats() {
  return (
    <div>
      <GameInfoTab /> 
      <StatsPage>
        <h2>Cosmópolis Blue Wings x Adversário</h2>
        <div>
          <h3>LMB</h3>
          <h3>U21</h3>
          <h3>Campinas</h3>
          <h3>17/02/2023</h3>
          <NewPlayerButton>+ Incluir Jogador</NewPlayerButton>
        </div>


        <PlayersChart />

      </StatsPage>

    </div>
  )
}