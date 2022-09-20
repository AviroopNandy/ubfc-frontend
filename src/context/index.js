import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = (children) => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  return (
    <AppContext.Provider
      value={{
        mobile,
        setMobile,
        email,
        setEmail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error(
      "Component must be enclosed by AppProvider to be able to use AppContext!"
    );
  }
  return appContext;
}
