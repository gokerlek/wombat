import { createContext, useContext, useMemo } from "react";
import useToggle from "../hooks/useToggle.jsx";

const defaultValues = {};

const GeneralContext = createContext(defaultValues);

export const useGeneral = () => useContext(GeneralContext);

export const GeneralProvider = ({ children }) => {
  const [open_sidebar, toggleSidebar] = useToggle(true);

  const values = useMemo(() => {
    return {
      open_sidebar,
      toggleSidebar,
    };
  }, [open_sidebar, toggleSidebar]);

  return (
    <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>
  );
};
