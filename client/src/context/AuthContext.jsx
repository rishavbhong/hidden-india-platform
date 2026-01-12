import { createContext, useContext, useState } from "react";

// Create the Auth Context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "Demo User",
    role: "Tourist" // Tourist | Guide | Guardian
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}
