import { ActionIcons, PlayersChartContainer, StatsController } from "./styles";
import { Trash, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

export function PlayersChart() {
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
        <tr>
          <td>Michael Jordan</td>
          <td>23</td>
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
      </tbody>

    </PlayersChartContainer>
  )
}