import { createContext, useContext, useState, useMemo } from "react";

const defaultValues = {
  error: null,
  setError: () => {},
};

const ErrorContext = createContext(defaultValues);

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const values = useMemo(() => {
    return { error, setError };
  }, [error, setError]);

  return (
    <ErrorContext.Provider value={values}>{children}</ErrorContext.Provider>
  );
};
