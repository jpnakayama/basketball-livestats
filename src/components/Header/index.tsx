import { AddInfoButton, HeaderContainer, HeaderContent } from "./styles";
import { UserCirclePlus, PlusCircle } from 'phosphor-react'
import * as Dialog from "@radix-ui/react-dialog";
import { GameInfoModal } from "../GameInfoModal";
import { AddPlayerModal } from "../AddPlayerModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1><span>LIVE</span>STATS</h1>
        <div>
          
          <Dialog.Root>
            <Dialog.Trigger>
              <AddInfoButton><PlusCircle size={20} weight="thin" /> Game Info</AddInfoButton>
            </Dialog.Trigger>
            <GameInfoModal />
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger>
            <AddInfoButton><UserCirclePlus size={20} weight="thin" /> Player</AddInfoButton>
            </Dialog.Trigger>
            <AddPlayerModal />
          </Dialog.Root>


        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}