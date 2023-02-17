import { ActionIcons, PlayersChartContainer } from "./styles";
import { Trash } from 'phosphor-react'

export function PlayersChart() {
  return (
    <PlayersChartContainer>
      <thead>
        <tr>
          <td width='30%'>Nome</td>
          <td width='5%'>n°</td>
          <td width='20%'>Pts</td>
          <td width='20%'>Reb</td>
          <td width='20%'>Ast</td>
          <td width='20%'>Blk</td>
          <td width='5%'>-</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Michael Jordan</td>
          <td>23</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <ActionIcons>
            <button><Trash size={20} weight="regular"/></button>
          </ActionIcons>
        </tr>
        <tr>
          <td>Michael Jordan</td>
          <td>23</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <ActionIcons>
            <button><Trash size={20} weight="regular"/></button>
          </ActionIcons>
        </tr>
        <tr>
          <td>Michael Jordan</td>
          <td>23</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <ActionIcons>
            <button><Trash size={20} weight="regular"/></button>
          </ActionIcons>
        </tr>
        <tr>
          <td>Michael Jordan</td>
          <td>23</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <ActionIcons>
            <button><Trash size={20} weight="regular"/></button>
          </ActionIcons>
        </tr>
        <tr>
          <td>Michael Jordan</td>
          <td>23</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <ActionIcons>
            <button><Trash size={20} weight="regular"/></button>
          </ActionIcons>
        </tr>
      </tbody>

    </PlayersChartContainer>
  )
}