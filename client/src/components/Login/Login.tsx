import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Login.css";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate("/home");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error al iniciar sesión";
      setError(parseFirebaseError(msg));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Fondo animado */}
      <div className="auth-bg">
        <div className="auth-orb auth-orb--1" />
        <div className="auth-orb auth-orb--2" />
      </div>

      <div className="auth-card">
        {/* Logo / Brand */}
        <div className="auth-brand">
          <span className="auth-brand__icon">🎬</span>
          <span className="auth-brand__name">MovieNote</span>
        </div>

        <h1 className="auth-title">Bienvenido de vuelta</h1>
        <p className="auth-subtitle">Inicia sesión para continuar</p>

        <form id="login-form" className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-field">
            <label htmlFor="login-email" className="auth-label">Correo electrónico</label>
            <input
              id="login-email"
              type="email"
              className="auth-input"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="login-password" className="auth-label">Contraseña</label>
            <input
              id="login-password"
              type="password"
              className="auth-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="auth-error" role="alert">
              <span className="auth-error__icon">⚠️</span>
              {error}
            </div>
          )}

          <button
            id="login-submit"
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading ? <span className="auth-spinner" /> : "Iniciar sesión"}
          </button>
        </form>

        <p className="auth-switch">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="auth-link">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
function parseFirebaseError(msg: string): string {
  if (msg.includes("user-not-found")) return "No existe una cuenta con ese correo.";
  if (msg.includes("wrong-password")) return "Contraseña incorrecta.";
  if (msg.includes("invalid-email")) return "El correo no es válido.";
  if (msg.includes("too-many-requests")) return "Demasiados intentos. Intenta más tarde.";
  if (msg.includes("invalid-credential")) return "Credenciales incorrectas.";
  return "Ocurrió un error. Intenta de nuevo.";
}
