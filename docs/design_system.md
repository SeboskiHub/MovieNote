# Sistema de Diseño – Movie Agenda

## Concepto Visual

La aplicación debe transmitir una sensación moderna, cinematográfica y minimalista. 
El contenido visual (posters) será el protagonista principal.

---

## Paleta de Colores (Versión Inicial Default)

### Colores Principales

- **Primario (Acciones principales):** #2563EB (Azul vibrante)
- **Secundario (Acentos):** #9333EA (Violeta moderno)
- **Fondo General:** #0F172A (Azul oscuro estilo streaming)
- **Tarjetas:** #1E293B (Gris azulado oscuro)
- **Texto Principal:** #F1F5F9 (Blanco suave)
- **Texto Secundario:** #94A3B8 (Gris claro)
- **Error/Eliminar:** #DC2626 (Rojo suave)

---

## Tipografía

- **Fuente Principal:** 'Inter', sans-serif.
- **Alternativa:** 'Roboto', sans-serif.
- **Encabezados:** Bold.
- **Texto normal:** Regular.
- **Tamaño base:** 16px.

---

## Componentes UI

### 1. Tarjetas (Movie Cards)
- Fondo oscuro (#1E293B).
- Bordes redondeados (8px).
- Sombra ligera.
- Efecto hover: ligera elevación (transform: translateY(-5px)).

### 2. Botones
- Border-radius: 6px.
- Padding amplio.
- Transición suave (0.3s).
- Botón principal: azul.
- Botón eliminar: rojo.

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