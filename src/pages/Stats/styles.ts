import styled from "styled-components";


export const StatsPage = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: -7rem auto 2rem;
  padding: 2rem 1.5rem;
  background-color: ${props => props.theme["gray-700"]};

  border-radius: 10px;
`

export const GameInfoDisplay = styled.div`
   
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    margin: 0 auto;

    h3 {
      color: ${props => props.theme["blue-300"]}
    }
  }
`