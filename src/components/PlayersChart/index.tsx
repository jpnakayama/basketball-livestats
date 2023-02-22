import { ActionIcons, PlayersChartContainer, StatsController } from "./styles";
import { Trash, CaretCircleDown, CaretCircleUp } from 'phosphor-react';
import { useContext, useState } from "react";
import { PlayersAttributesContext } from "../../Contexts/PlayersContext";

export function PlayersChart() {
  
  const { newPlayer, deletePlayer } = useContext(PlayersAttributesContext)

  const [points, setPoints] = useState<number>(0)
  const [rebounds, setRebounds] = useState<number>(0)
  const [assists, setAssists] = useState<number>(0)
  const [blocks, setBlocks] = useState<number>(0)

  return (
    <>
      {newPlayer.length > 0 && (
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
                        <button onClick={() => setPoints(player.points--)}>
                          <CaretCircleDown size={24} color="#f50a0a" />
                        </button>
                        <span>{player.points}</span>
                        <button onClick={() => setPoints(player.points++)}>
                          <CaretCircleUp size={24} color="#3fc641"  />
                        </button>
                      </StatsController>
                    </td>
                    <td>
                      <StatsController>
                        <button onClick={() => setRebounds(player.rebounds--)}>
                        <CaretCircleDown size={24} color="#f50a0a" />
                        </button>
                        <span>{player.rebounds}</span>
                        <button onClick={() => setRebounds(player.rebounds++)}>
                          <CaretCircleUp size={24} color="#3fc641" />
                        </button>
                      </StatsController>
                    </td>
                    <td>
                      <StatsController>
                        <button onClick={() => setAssists(player.assists--)}>
                          <CaretCircleDown size={24} color="#f50a0a"/>
                        </button>
                        <span>{player.assists}</span>
                        <button onClick={() => setAssists(player.assists++)}>
                          <CaretCircleUp size={24} color="#3fc641"  />
                        </button>
                      </StatsController>
                    </td>
                    <td>
                      <StatsController>
                        <button onClick={() => setBlocks(player.blocks--)}>
                          <CaretCircleDown size={24} color="#f50a0a" />
                        </button>
                        <span>{player.blocks}</span>
                        <button onClick={() => setBlocks(player.blocks++)}>
                          <CaretCircleUp size={24} color="#3fc641"  />
                        </button>
                      </StatsController>
                    </td>

      
                    <ActionIcons><button onClick={() => deletePlayer(player.number)}><Trash size={24} weight="regular"/></button></ActionIcons>
                  </tr>
      
                )
              })}
            </tbody>
          </PlayersChartContainer>
      )}
    </>
  )
}