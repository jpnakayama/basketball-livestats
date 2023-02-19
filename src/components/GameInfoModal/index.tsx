import { CloseButton, Content, Overlay } from "./styles";
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
  const [timeMandante, setTimeMandante] = useState<string>('')
  const [timeVisitante, setTimeVisitante] = useState<string>('')
  const [competicao, setCompeticao] = useState<string>('')
  const [categoria, setCategoria] = useState<string>('')
  const [local, setLocal] = useState<string>('')
  const [gameDate, setGameDate] = useState<string>('')
  
  const dataAtual = Date.now()
  const dataFormatada = format(dataAtual, "P", {
    locale: ptBR
  })
  
  function handleSubmit() {
    setGameDate(dataFormatada)

    setFormValues({ timeMandante, timeVisitante, competicao, categoria, local, gameDate })    
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
              name="competicao"
              onChange={(e) => setCompeticao(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Time casa"
              name="timeMandante"
              onChange={(e) => setTimeMandante(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Time visitante"
              name="timeVisitante"
              onChange={(e) => setTimeVisitante(e.target.value)}
            />            
            <input 
              type="text" 
              placeholder="Local"
              name="local"
              onChange={(e) => setLocal(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Categoria"
              name="categoria"
              onChange={(e) => setCategoria(e.target.value)}
            />
            <button type="button" onClick={handleSubmit}>Cadastrar</button>
          </form>     

        </Content>
      </Overlay>

    </Dialog.Portal>
  )
}

