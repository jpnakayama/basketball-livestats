import React, { ReactNode, useState, createContext } from 'react';

type PlayersAttributes = {
  name: string;
  number: string;
  points: number;
  rebounds: number;
  assists: number;
  blocks: number;
}

type PlayersAttributesType = {
  newPlayer: PlayersAttributes[],
  setNewPlayer: React.Dispatch<React.SetStateAction<PlayersAttributes[]>>,
  deletePlayer: (number: string) => void
}

interface PlayersAttributesProps {
  children: ReactNode
}

export const PlayersAttributesContext = createContext({} as PlayersAttributesType);

export function PlayersAttributesProvider({ children }: PlayersAttributesProps) {
  const [newPlayer, setNewPlayer] = useState<PlayersAttributes[]>([])

  function deletePlayer(number: string) {
    const updatedPlayersList = newPlayer.filter(
      (player) => player.number !== number,
    )
    setNewPlayer(updatedPlayersList)
  }

    return (
    <PlayersAttributesContext.Provider value={
      { 
        newPlayer, 
        setNewPlayer,
        deletePlayer
      }}>
      {children}
    </PlayersAttributesContext.Provider>
  );
};