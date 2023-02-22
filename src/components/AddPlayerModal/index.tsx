import { CloseButton, Content, Overlay } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { useContext, useState } from "react";
import { PlayersAttributesContext } from "../../Contexts/PlayersContext";


export function AddPlayerModal() {
  
  const { setNewPlayer } = useContext(PlayersAttributesContext)

  const [name, setName] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [points, setPoints] = useState<number>(0)
  const [rebounds, setRebounds] = useState<number>(0)
  const [assists, setAssists] = useState<number>(0)
  const [blocks, setBlocks] = useState<number>(0)

  function handleSubmitPlayer(e: any) {
    e.preventDefault()
    
    setNewPlayer(state => [...state, { name, number, points, rebounds, assists, blocks }])
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>INCLUIR JOGADOR</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmitPlayer}>
            <input 
              type="text" 
              placeholder="Nome"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
              />
            <input 
              type="number" 
              placeholder="Número"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <button type="submit">Incluir</button>
          </form>     

        </Content>
      </Overlay>

    </Dialog.Portal>
  )
}