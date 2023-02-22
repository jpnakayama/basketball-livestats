import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['pp-900']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    
  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  
    input {
      border-radius: 6px;
      border: none;

      padding: 0.5rem;

      background: ${(props) => props.theme["pp-500"]};
      color: ${(props) => props.theme['blue-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['blue-700']};
      }

    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  border: 0;
  position: absolute;
  background: transparent;

  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`

export const DateCheckBox = styled.fieldset`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none; 

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: ${(props) => props.theme['pp-500']};
    width: 1.15em;
    height: 1.15em;
    border: none;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }
    
  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${(props) => props.theme['pp-500']};
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
  
  label {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`

export const SubmitButton = styled(Dialog.Close)`
  max-width: fit-content;

  padding: 1rem;
  background: ${(props) => props.theme['blue-300']};
  color: ${props => props.theme["gray-100"]};
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: ${(props) => props.theme['blue-500']};
    color: ${props => props.theme["gray-100"]};
    transition: background-color 0.2s, color 0.2s;
  }
`