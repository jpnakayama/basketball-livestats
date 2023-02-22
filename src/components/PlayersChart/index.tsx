import { ActionIcons, PlayersChartContainer, StatsController } from "./styles";
import { Trash, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';
import { useState, useContext } from "react";
import { PlayersAttributesContext } from "../../Contexts/PlayersContext";

export function PlayersChart() {
  
  const { newPlayer } = useContext(PlayersAttributesContext)
  
  /* const [pts, setPts] = useState<number>(0)
  const [reb, setReb] = useState<number>(0)
  const [ast, setAst] = useState<number>(0)
  const [blk, setBlk] = useState<number>(0) */
  
  return (
    <PlayersChartContainer>
      <thead>
        <tr>
          <td width='20%'>Atleta</td>
          <td width='7%'>n°</td>
          <td width='17%'>Pts</td>
          <td width='17%'>Reb</td>
          <td width='17%'>Ast</td>
          <td width='17%'>Blk</td>
          <td width='5%'></td>
        </tr>
      </thead>
      <tbody>
        {newPlayer.map((player) => {
          return (
            <tr key={player.number}>
              <td>{player.name}</td>
              <td>{player.number}</td>
              <td>
                <StatsController>
                  <button>
                    <ArrowCircleDown size={24} color="#a40a30" weight="duotone" />
                  </button>
                  <span>0</span>
                  <button>
                    <ArrowCircleUp size={24} color="#084f10" weight="duotone" />
                  </button>
                </StatsController>
              </td>
              <td>
                <StatsController>
                  <button>
                    <ArrowCircleDown size={24} color="#a40a30" weight="duotone" />
                  </button>
                  <span>0</span>
                  <button>
                    <ArrowCircleUp size={24} color="#084f10" weight="duotone" />
                  </button>
                </StatsController>
              </td>
              <td>
                <StatsController>
                  <button>
                    <ArrowCircleDown size={24} color="#a40a30" weight="duotone" />
                  </button>
                  <span>0</span>
                  <button>
                    <ArrowCircleUp size={24} color="#084f10" weight="duotone" />
                  </button>
                </StatsController>
              </td>
              <td>
                <StatsController>
                  <button>
                    <ArrowCircleDown size={24} color="#a40a30" weight="duotone" />
                  </button>
                  <span>0</span>
                  <button>
                    <ArrowCircleUp size={24} color="#084f10" weight="duotone" />
                  </button>
                </StatsController>
              </td>

              <ActionIcons><button><Trash size={24} weight="regular"/></button></ActionIcons>
            </tr>

          )
        })}
      </tbody>

    </PlayersChartContainer>
  )
}