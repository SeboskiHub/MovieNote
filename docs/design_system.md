# Sistema de Diseño – Movie Agenda

## Concepto Visual

La aplicación debe transmitir una sensación moderna, cinematográfica y minimalista. 
El contenido visual (posters) será el protagonista principal.

---

## Paleta de Colores (Versión Inicial Default)

### Colores Principales

- **Primario (Acciones principales):** #5127b4 (Violeta moderno)
- **Secundario (Acentos):** #320352 (Morado futurista)
- **Fondo General:** #0B0B0F (Negro profundo espacial)
- **Tarjetas:** #111827 (Gris oscuro elegante)
- **Texto Principal:** #F9FAFB (Blanco suave)
- **Texto Secundario:** #9CA3AF (Gris neutro)
- **Error/Eliminar:** #EF4444 (Rojo suave)

---


## Efectos visuales

--**Glow/ Hover primario:** rgba (139, 92, 246, 0.35)
--**Tarjetas Hover:** #1F2933
--**Texto Desactivado:** #6B7280
--**Éxito / Confirmación:** #22C55E

## Fondo / Ambientación 

--**Color base:** #0B0B0F (Negro profundo espacial)
--**Estilo:** Oscuro cinematográfico / espacial
--**Efecto:** Estrellas sutiles
--**Animación:** Movimiento lento y suave

El fondo debe aportar profundidad visual sin distraer del contenido principal.

**Lineamientos:**

-Las estrellas deben ser pequeñas y de baja opacidad.
-El movimiento debe ser sutil y elegante.
-No debe generar ruido visual.


## Tipografía

- **Fuente Principal:** Bebas Neue
- **Alternativa:** Playfair Display
- **Encabezados:** Spectral
- **Texto normal:** Yanone Kaffeesatz
- **Tamaño base:** 16px.

---

## Componentes UI

### 1. Tarjetas (Movie Cards)
- **Fondo oscuro:** #111827
- **Bordes redondeados:**(10px).
- **Sombra:** Ligera.
- **Efecto hover:** Ligera elevación (transform: translateY(-5px)).
- **Glow:** Violeta suave.
- **Escala sútil:** scale(1.02)

### 2. Botones
- **Border-radius:** 8px.
- **Padding:** Amplio.
- **Transición:** Suave (0.3s).
- **Botón principal:** Violeta.
- **Botón eliminar:** Rojo.
- **Glow:** Suave.
- **Brillo:** Ligero.

### 3. Inputs (Notas del usuario)
- Fondo ligeramente más claro que las tarjetas.
- Borde sutil.
- Texto blanco.

---

## Layout

- Diseño Mobile First.
- Grid responsive:
  - 1 columna en móvil.
  - 2–3 columnas en tablet.
  - 4–5 columnas en escritorio.
- Espaciado basado en múltiplos de 8px.

---

## Experiencia de Usuario (UX)

- Navegación clara entre:
  - Inicio (Catálogo)
  - Mi Agenda
- Feedback visual al agregar o eliminar elementos.
- Animaciones sutiles, no invasivas.