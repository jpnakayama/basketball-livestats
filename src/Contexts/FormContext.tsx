import React, { ReactNode, useState } from 'react';

// Tipificação dos dados passados por formulário
type FormValues = {
  league: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  grade: string;
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
    league: '',
    homeTeam: '',
    awayTeam: '',
    venue: '',
    grade: '',
    gameDate: ''
  },
  setFormValues: () => {},
});

Nesse caso achei melhor criar separado para ficar as ações ficarem mais claras no provider
*/

// Definindo os valores iniciais das variáveis e a alteração com o setFormValues
const DEFAULT_VALUE = {
  formValues: {
    league: '',
    homeTeam: '',
    awayTeam: '',
    venue: '',
    grade: '',
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