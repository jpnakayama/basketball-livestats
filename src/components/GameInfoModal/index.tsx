import { useState } from "react";
import { GameInfoContainer, GameInfoForm } from "./styles";

export function GameInfoTab() {
  
  return (
    <GameInfoContainer>
      <h2>INFORMAÇÕES DA PARTIDA</h2>
      <GameInfoForm action="">
        <input type="text" placeholder="Competição" />
        <input type="text" placeholder="Time casa" />
        <input type="text" placeholder="Time visitante" />
        <input type="text" placeholder="Local" />
        <input type="text" placeholder="Categoria" />
        <button>Cadastrar</button>
      </GameInfoForm>     
    </GameInfoContainer>
  )
}