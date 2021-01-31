import * as React from "react";

export const successfulContext = React.createContext({
  open: false,
  setOpen: (newValue: boolean) => {},
});

export const useSuccessful = () => React.useContext(successfulContext);

export const SuccessfulContextProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <successfulContext.Provider value={{ open, setOpen }}>
      {children}
    </successfulContext.Provider>
  );
};
