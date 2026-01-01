import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
      setUser({ email, _id: "dummy-id" });
      localStorage.setItem("auth", JSON.stringify({ email, _id: "dummy-id" }));
  }

  function register(email, password) {
    setUser({ email, _id: "dummy-id" });
  }

  function logout() {
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
