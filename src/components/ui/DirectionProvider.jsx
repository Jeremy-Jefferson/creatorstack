import { createContext, useContext } from 'react';

const DirectionContext = createContext('ltr');

export function DirectionProvider({
  children,
  dir = 'ltr',
}) {
  return (
    <DirectionContext.Provider value={dir}>
      {children}
    </DirectionContext.Provider>
  );
}

export function useDirection() {
  return useContext(DirectionContext);
}
