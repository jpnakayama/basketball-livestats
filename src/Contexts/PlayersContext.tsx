import React, { ReactNode, useState, createContext } from 'react';

type PlayersAttributes = {
  name: string;
  number: string;
}

type PlayersAttributesType = {
  newPlayer: PlayersAttributes[],
  setNewPlayer: React.Dispatch<React.SetStateAction<PlayersAttributes[]>>,
}

interface PlayersAttributesProps {
  children: ReactNode
}

export const PlayersAttributesContext = createContext({} as PlayersAttributesType);

export function PlayersAttributesProvider({ children }: PlayersAttributesProps) {
  const [newPlayer, setNewPlayer] = useState<PlayersAttributes[]>([])

    return (
    <PlayersAttributesContext.Provider value={
      { 
        newPlayer, 
        setNewPlayer 
      }}>
      {children}
    </PlayersAttributesContext.Provider>
  );
};