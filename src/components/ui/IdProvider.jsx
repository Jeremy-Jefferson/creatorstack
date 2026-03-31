import { createContext, useContext, useState } from 'react';

const IdContext = createContext(null);

export function IdProvider({
  children,
  prefix = 'id',
}) {
  const [count, setCount] = useState(0);

  const generateId = () => {
    const id = `${prefix}-${count}`;
    setCount((prev) => prev + 1);
    return id;
  };

  return (
    <IdContext.Provider value={{ generateId }}>
      {children}
    </IdContext.Provider>
  );
}

export function useId() {
  const context = useContext(IdContext);
  if (!context) {
    throw new Error('useId must be used within an IdProvider');
  }
  return context.generateId;
}
