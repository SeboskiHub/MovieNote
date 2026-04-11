import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../services/firebase/firebaseConfig";
import { loginUser, registerUser, logoutUser } from "../services/firebase/authService";

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// ──────────────────────────────────────────────
// Context
// ──────────────────────────────────────────────
export const AuthContext = createContext<AuthContextType | null>(null);

// ──────────────────────────────────────────────
// Provider
// ──────────────────────────────────────────────
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Escuchar cambios de sesión en Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const result = await loginUser(email, password);
    setUser(result.user);
  };

  const register = async (email: string, password: string) => {
    const result = await registerUser(email, password);
    setUser(result.user);
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ──────────────────────────────────────────────
// Hook helper (exported from here también)
// ──────────────────────────────────────────────
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
