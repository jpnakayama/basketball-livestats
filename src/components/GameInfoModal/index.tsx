import { CloseButton, Content, Overlay } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'


export function GameInfoModal() {
  
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>INFORMAÇÕES DA PARTIDA</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Competição" />
            <input type="text" placeholder="Time casa" />
            <input type="text" placeholder="Time visitante" />
            <input type="text" placeholder="Local" />
            <input type="text" placeholder="Categoria" />
            <button>Cadastrar</button>
          </form>     

        </Content>
      </Overlay>

    </Dialog.Portal>
  )
}