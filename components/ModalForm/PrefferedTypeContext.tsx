import * as React from "react";
import { FormType } from "interfaces/Form";

interface Context {
  prefferedType: FormType;
  setPrefferedType: (newValue: FormType) => void;
}
export const prefferedTypeContext = React.createContext<Context>({
  prefferedType: undefined,
  setPrefferedType: () => {},
});
export const usePrefferedTypeContext = () =>
  React.useContext(prefferedTypeContext);

export const PrefferedTypeContext = ({ children }) => {
  const [prefferedType, setPrefferedType] = React.useState<FormType>();

  return (
    <prefferedTypeContext.Provider value={{ prefferedType, setPrefferedType }}>
      {children}
    </prefferedTypeContext.Provider>
  );
};
