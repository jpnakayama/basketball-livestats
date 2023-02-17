import { CloseButton, Content, Overlay } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'


export function AddPlayerModal() {
  
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Incluir jogador</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Nome" />
            <input type="number" placeholder="Número" />
            <button>Incluir</button>
          </form>     

        </Content>
      </Overlay>

    </Dialog.Portal>
  )
}