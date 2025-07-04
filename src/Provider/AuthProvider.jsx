import { createContext } from "react";

// 1. Create the context
const AuthContext = createContext(null);

// 2. Create the provider component
const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "Monzurul",
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// 3. Export both for use
export { AuthProvider, AuthContext };
