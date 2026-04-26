import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import "../Login/Login.css";
import "./Register.css";

export function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setLoading(true);
    try {
      await register(email, password);
      navigate("/");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error al registrarse";
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
        {/* Brand */}
        <div className="auth-brand">
          <span className="auth-brand__icon">🎬</span>
          <span className="auth-brand__name">MovieNote</span>
        </div>

        <h1 className="auth-title">Crea tu cuenta</h1>
        <p className="auth-subtitle">Empieza a guardar tus películas favoritas</p>

        <form id="register-form" className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-field">
            <label htmlFor="register-email" className="auth-label">Correo electrónico</label>
            <input
              id="register-email"
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
            <label htmlFor="register-password" className="auth-label">Contraseña</label>
            <input
              id="register-password"
              type="password"
              className="auth-input"
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="register-confirm" className="auth-label">Confirmar contraseña</label>
            <input
              id="register-confirm"
              type="password"
              className={`auth-input ${
                confirmPassword && confirmPassword !== password ? "auth-input--mismatch" : ""
              }`}
              placeholder="Repite tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            {confirmPassword && confirmPassword !== password && (
              <span className="auth-hint">Las contraseñas no coinciden</span>
            )}
          </div>

          {error && (
            <div className="auth-error" role="alert">
              <span className="auth-error__icon">⚠️</span>
              {error}
            </div>
          )}

          <button
            id="register-submit"
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading ? <span className="auth-spinner" /> : "Crear cuenta"}
          </button>
        </form>

        <p className="auth-switch">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="auth-link">
            Inicia sesión
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  );
}

// ──────────────────────────────────────────────
function parseFirebaseError(msg: string): string {
  if (msg.includes("email-already-in-use")) return "Ya existe una cuenta con ese correo.";
  if (msg.includes("invalid-email")) return "El correo no es válido.";
  if (msg.includes("weak-password")) return "La contraseña es demasiado débil.";
  return "Ocurrió un error. Intenta de nuevo.";
}
