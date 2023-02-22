import { CloseButton, Content, DateCheckBox, Overlay, SubmitButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContext, useState } from "react";
import { FormContext } from "../../Contexts/FormContext";
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

export function GameInfoModal() {
  // Usando o useContext para capturar as propriedades do setFormValues (que irá definir o estado após a alteração)
  const { setFormValues } = useContext(FormContext)

  // Para capturar os dados dos inputs serão criadas variáveis de estado para cada valor  
  const [homeTeam, setHomeTeam] = useState<string>('')
  const [awayTeam, setAwayTeam] = useState<string>('')
  const [league, setLeague] = useState<string>('')
  const [grade, setGrade] = useState<string>('')
  const [venue, setVenue] = useState<string>('')
  const [gameDate, setGameDate] = useState<string>('')
  
  const dataAtual = Date.now()
  const dataFormatada = format(dataAtual, "P", {
    locale: ptBR
  })

  function handleSubmit() {
    
     setFormValues({ homeTeam, awayTeam, league, grade, venue, gameDate })
  };

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>INFORMAÇÕES DA PARTIDA</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form>
            <input 
              type="text" 
              placeholder="Competição"
              name="league"
              onChange={(e) => setLeague(e.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder="Time casa"
              name="homeTeam"
              onChange={(e) => setHomeTeam(e.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder="Time visitante"
              name="awayTeam"
              onChange={(e) => setAwayTeam(e.target.value)}
              required
            />            
            <input 
              type="text" 
              placeholder="Local"
              name="venue"
              onChange={(e) => setVenue(e.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder="Categoria"
              name="grade"
              onChange={(e) => setGrade(e.target.value)}
              required
            />
            <DateCheckBox>
              <input type="checkbox" onChange={() => setGameDate(dataFormatada)} />
              <label>Incluir data?</label>
            </DateCheckBox>

            <SubmitButton type="button" onClick={handleSubmit}>Cadastrar</SubmitButton>
          </form>     

        </Content>
      </Overlay>

    </Dialog.Portal>
  )
}

