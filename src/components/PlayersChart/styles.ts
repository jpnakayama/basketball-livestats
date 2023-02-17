import styled from "styled-components";

export const PlayersChartContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  thead td {
    font-weight: 700;
    color: ${props => props.theme["blue-500"]};

  }
  
  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme["gray-500"]};
    color: ${props => props.theme["blue-700"]};
    
    text-align: center;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;

      text-align: left;
      font-weight: 700;
    }
    
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }  
`

export const StatsController = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none
  }

  span {
    font-size: 1.2rem;
  }
  
`

export const ActionIcons = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  
  button {
    background: transparent;
    border: none;
    color: ${props => props.theme['blue-700']};
    cursor: pointer;

    :hover {
      color: ${props => props.theme['red-700']};
    }
  }
  `