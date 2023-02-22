import { ActionIcons, PlayersChartContainer, StatsController } from "./styles";
import { Trash, ArrowCircleDown, ArrowCircleUp, CaretDoubleDown, CaretDoubleUp, CaretCircleDown, CaretCircleUp, ArrowSquareDown, ArrowSquareUp } from 'phosphor-react';
import { useState, useContext } from "react";
import { PlayersAttributesContext } from "../../Contexts/PlayersContext";

export function PlayersChart() {
  
  const { newPlayer } = useContext(PlayersAttributesContext)
  
  let [pts, setPts] = useState<number>(0)
  let [reb, setReb] = useState<number>(0)
  let [ast, setAst] = useState<number>(0)
  let [blk, setBlk] = useState<number>(0)
  
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
                        <button onClick={() => {setPts(pts--)}}>
                          <CaretCircleDown size={24} color="#f50a0a" />
                        </button>
                        <span>{pts}</span>
                        <button onClick={() => {setPts(pts++)}}>
                          <CaretCircleUp size={24} color="#3fc641"  />
                        </button>
                      </StatsController>
                    </td>
                    <td>
                      <StatsController>
                        <button onClick={() => {setReb(reb--)}}>
                        <CaretCircleDown size={24} color="#f50a0a" />
                        </button>
                        <span>{reb}</span>
                        <button onClick={() => {setReb(reb++)}}>
                          <CaretCircleUp size={24} color="#3fc641" />
                        </button>
                      </StatsController>
                    </td>
                    <td>
                      <StatsController>
                        <button onClick={() => {setAst(ast--)}}>
                          <CaretCircleDown size={24} color="#f50a0a"/>
                        </button>
                        <span>{ast}</span>
                        <button onClick={() => {setAst(ast++)}}>
                          <CaretCircleUp size={24} color="#3fc641"  />
                        </button>
                      </StatsController>
                    </td>
                    <td>
                      <StatsController>
                        <button onClick={() => {setBlk(blk--)}}>
                          <CaretCircleDown size={24} color="#f50a0a" />
                        </button>
                        <span>{blk}</span>
                        <button onClick={() => {setBlk(blk++)}}>
                          <CaretCircleUp size={24} color="#3fc641"  />
                        </button>
                      </StatsController>
                    </td>

      
                    <ActionIcons><button><Trash size={24} weight="regular"/></button></ActionIcons>
                  </tr>
      
                )
              })}
            </tbody>
          </PlayersChartContainer>
      )}
    </>
  )
}