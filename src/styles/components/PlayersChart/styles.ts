import styled from "styled-components";

export const PlayersChartContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  thead {
    font-weight: 700;
    
    td {
      color: ${props => props.theme["blue-500"]}
    }
  }

  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme['pp-500']};
    color: ${props => props.theme["blue-300"]};
    
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
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
    color: ${props => props.theme['blue-300']};
    cursor: pointer;

    :hover {
      color: ${props => props.theme['red-300']};
    }
  }
  `