import { createContext, ReactNode, useContext, useState } from "react";

type CountContextType = {
  count: number;
  setCount: (value: number) => void;
};

const CountContext = createContext<CountContextType | undefined>(undefined);

export const CountContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountContextProvider");
  }
  return context;
};
