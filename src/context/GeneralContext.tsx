"use client";

import { useState, createContext } from "react";

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;
type StringState = React.Dispatch<React.SetStateAction<string>>;

interface CreateContext {
  menu: boolean;
  setMenu: BooleanState;
  daPath: string;
  setDaPath: StringState;
  enPath: string;
  setEnPath: StringState;
  language: string;
  setLanguage: StringState;
}

export const GeneralContext = createContext<CreateContext>({} as any);

export const GeneralProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menu, setMenu] = useState(false);
  const [daPath, setDaPath] = useState("");
  const [enPath, setEnPath] = useState("");
  const [language, setLanguage] = useState("en-US");

  return (
    <GeneralContext.Provider
      value={{
        menu,
        setMenu,
        daPath,
        setDaPath,
        enPath,
        setEnPath,
        language,
        setLanguage,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
