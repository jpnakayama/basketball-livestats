import styled from "styled-components";


export const StatsPage = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 2rem 1.5rem;
  background-color: ${props => props.theme["pp-700"]};

  border-radius: 10px;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
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

export const NewPlayerButton = styled.button`
height: 50px;
border: 0;
background: ${props => props.theme['blue-500']};
color: ${props => props.theme.white};
font-weight: bold;
font-size: 0.8rem;

padding: 0 1.25rem;
border-radius: 6px;
cursor: pointer;

&:hover{
  background: ${props => props.theme['blue-700']};
  transition: background-color 0.2s;
}
`