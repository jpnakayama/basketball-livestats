import { AddInfoButton, HeaderContainer, HeaderContent } from "./styles";
import { UserCirclePlus, PlusCircle } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1><span>LIVE</span>STATS</h1>
        <div>
          

          <AddInfoButton><PlusCircle size={20} weight="thin" /> Game Info</AddInfoButton>



          <AddInfoButton><UserCirclePlus size={20} weight="thin" /> Player</AddInfoButton>



        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}