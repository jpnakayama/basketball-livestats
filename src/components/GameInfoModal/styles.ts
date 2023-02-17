import styled from "styled-components";

export const GameInfoContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 2rem 1.5rem;
  background-color: ${props => props.theme["pp-700"]};
  
  border-radius: 10px;

  h2 {
    margin-bottom: 1rem;
  }
`

export const GameInfoForm = styled.form`
  display: grid;
  grid-template-columns: 3fr 3fr;
  gap: 2rem;
  
  input {
    border-radius: 6px;
    border: none;

    padding: 0.5rem;

    background: ${(props) => props.theme["pp-900"]};
    color: ${(props) => props.theme['blue-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['blue-700']};
    }

  }
  
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    max-width: fit-content;

    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['blue-300']};
    color: ${(props) => props.theme['blue-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['blue-500']};
      border-color: ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    }
  }
`
