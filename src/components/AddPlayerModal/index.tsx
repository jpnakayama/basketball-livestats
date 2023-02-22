import { CloseButton, Content, Overlay } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { useContext, useState } from "react";
import { PlayersAttributesContext } from "../../Contexts/PlayersContext";


export function AddPlayerModal() {
  
  const { setNewPlayer } = useContext(PlayersAttributesContext)

  const [name, setName] = useState<string>('')
  const [number, setNumber] = useState<string>('')

  function handleSubmitPlayer() {
    setNewPlayer(state => [...state, { name, number }])
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Incluir jogador</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input 
              type="text" 
              placeholder="Nome"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              type="number" 
              placeholder="Número"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <button type="button" onClick={handleSubmitPlayer}>Incluir</button>
          </form>     

        </Content>
      </Overlay>

    </Dialog.Portal>
  )
}