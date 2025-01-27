'use client'
import { ReactNode, useState } from 'react';
import contexto from './context';

interface IProvider { children: ReactNode }

export default function Provider({children }: IProvider) {
  const [showInformations, setShowInformations] = useState<boolean>(false);
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  return (
    <contexto.Provider
      value={{
        showInformations, setShowInformations,
        sendMessage, setSendMessage,
      }}
    >
      {children}
    </contexto.Provider>
  );
}

