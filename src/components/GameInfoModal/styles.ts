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