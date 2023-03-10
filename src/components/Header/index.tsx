import { AddInfoButton, HeaderContainer, HeaderContent } from "./styles";
import { UserCirclePlus, PlusCircle, Record } from 'phosphor-react'
import * as Dialog from "@radix-ui/react-dialog";
import { GameInfoModal } from "../GameInfoModal";
import { AddPlayerModal } from "../AddPlayerModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>
          <span>LIVE</span>
          STATS
        </h1>        
        
        <div>
          
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <AddInfoButton><PlusCircle size={20} weight="thin" />Dados do jogo</AddInfoButton>
            </Dialog.Trigger>
            <GameInfoModal />
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
            <AddInfoButton><UserCirclePlus size={20} weight="thin" />Atleta</AddInfoButton>
            </Dialog.Trigger>
            <AddPlayerModal />
          </Dialog.Root>


        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}