import { Header } from "../../components/Header";
import { PlayersChart } from "../../components/PlayersChart";
import { GameInfoDisplay, StatsPage } from "./styles";

export function Stats() {
  return (
    <div>
      <Header />

      <StatsPage>
        <GameInfoDisplay>
          <h2>Cosmópolis Blue Wings x Adversário</h2>
          <div>
            <h3>competição</h3>
            <h3>categoria</h3>
            <h3>local</h3>
            <h3>data</h3>
          </div>
        </GameInfoDisplay>

        <PlayersChart />

      </StatsPage>

    </div>
  )
}