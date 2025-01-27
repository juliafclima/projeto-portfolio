'use client'
import { createContext } from 'react';

interface RecipesContext {
  showInformations: boolean,
  setShowInformations: (state: boolean) => void,
  sendMessage: boolean,
  setSendMessage: (state: boolean) => void,
}

const initialValue: RecipesContext = {
  showInformations: false,
  setShowInformations: () => {},
  sendMessage: false,
  setSendMessage: () => {},
}

const contexto = createContext(initialValue);
export default contexto;