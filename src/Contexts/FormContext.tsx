import React, { ReactNode, useState } from 'react';

// Tipificação dos dados passados por formulário
type FormValues = {
  competicao: string;
  timeMandante: string;
  timeVisitante: string;
  local: string;
  categoria: string;
  gameDate: string
}

// Tipificação das Props do contexto
type FormContextType = {
  formValues: FormValues,
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>,
}

interface FormProviderProps {
  children: ReactNode
}

/*
A constante que irá conter os valores iniciais das variáveis pode ser criada dentro da constante de criação de contexto.

export const FormContext = React.createContext<FormContextType>({
  formValues: {
    competicao: '',
    timeMandante: '',
    timeVisitante: '',
    local: '',
    categoria: '',
    gameDate: ''
  },
  setFormValues: () => {},
});

Nesse caso achei melhor criar separado para ficar as ações ficarem mais claras no provider
*/

// Definindo os valores iniciais das variáveis
const DEFAULT_VALUE = {
  formValues: {
    competicao: '',
    timeMandante: '',
    timeVisitante: '',
    local: '',
    categoria: '',
    gameDate: ''
  },
  setFormValues: () => {},
};

// Criando o CONTEXTO e passando os valores iniciais das variáveis
export const FormContext = React.createContext<FormContextType>(DEFAULT_VALUE);

/*
A função abaixo (PROVIDER) irá alterar o estado e passar para os componentes
*/

export function FormProvider({ children }: FormProviderProps) {
  const [formValues, setFormValues] = useState(DEFAULT_VALUE.formValues)

  return (
    <FormContext.Provider value={
      { 
        formValues, 
        setFormValues 
      }}>
      {children}
    </FormContext.Provider>
  );
};