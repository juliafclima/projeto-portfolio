"use client";
import { createContext } from "react";

interface RecipesContext {
  showInformations: boolean;
  setShowInformations: (state: boolean) => void;
}

const initialValue: RecipesContext = {
  showInformations: false,
  setShowInformations: () => {},
};

const contexto = createContext(initialValue);
export default contexto;
