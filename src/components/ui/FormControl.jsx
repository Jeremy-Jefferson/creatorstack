import { createContext, useContext } from 'react';

const FormControlContext = createContext(null);

export function FormControlProvider({
  children,
  id,
  error,
  required,
  disabled,
}) {
  return (
    <FormControlContext.Provider
      value={{
        id,
        error,
        required,
        disabled,
      }}
    >
      {children}
    </FormControlContext.Provider>
  );
}

export function useFormControl() {
  return useContext(FormControlContext);
}
