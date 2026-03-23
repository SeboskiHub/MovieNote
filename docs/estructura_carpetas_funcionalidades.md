
# Funcionalidades y Objetivos de Carpetas Clave en MovieNote (Ampliado)

## hooks/
Contiene custom hooks de React para encapsular y reutilizar lógica relacionada con estado, efectos secundarios o integración con APIs. Ejemplos: autenticación, fetch de datos, sincronización con LocalStorage, paginación, etc.

**Objetivo:**
- Centralizar lógica reutilizable y desacoplarla de los componentes.
- Facilitar el mantenimiento y la escalabilidad del código.

## context/
Define y exporta contextos de React (Context API) y sus providers. Permite compartir estado global (como usuario autenticado, agenda, tema visual) entre componentes sin prop drilling.

**Objetivo:**
- Gestionar estados globales de forma eficiente y desacoplada.
- Mejorar la organización y claridad del flujo de datos en la app.

## utils/
Incluye funciones utilitarias y helpers puros, independientes de React. Ejemplos: formateadores de fechas, validadores, generadores de IDs, helpers para arrays y strings.

**Objetivo:**
- Centralizar lógica auxiliar y evitar duplicación de código.
- Mejorar la mantenibilidad y claridad del proyecto.

## routes/
Define la estructura de rutas y navegación de la aplicación usando React Router. Incluye rutas públicas, privadas y agrupadas por dominio.

**Objetivo:**
- Mantener la navegación desacoplada y fácil de modificar.
- Facilitar la escalabilidad y el control de acceso a vistas.

## types/
Contiene definiciones TypeScript de tipos, interfaces y modelos de datos usados en toda la app. Ejemplos: Movie, User, Note, respuestas de la API, props de componentes.

**Objetivo:**
- Garantizar tipado fuerte y autocompletado en desarrollo.
- Reducir errores y mejorar la documentación interna del código.


## components/
Componentes visuales reutilizables y desacoplados, tanto atómicos (Button, Input) como complejos (MovieCard, Navbar, Modal). Pueden tener subcarpetas por componente.

**Objetivo:**
- Centralizar la UI y facilitar la reutilización visual.
- Mantener el sistema de diseño y la consistencia visual.

## features/
Agrupa la lógica y componentes relacionados a funcionalidades específicas del dominio (auth, agenda, catálogo, notas). Cada feature puede tener sus propios subcomponentes, hooks y lógica.

**Objetivo:**
- Modularizar la lógica de negocio y facilitar la escalabilidad.
- Permitir el trabajo paralelo y la mantenibilidad.

## services/
Servicios para interacción con APIs externas (TMDB, Firebase), autenticación, almacenamiento local, etc. Centralizan la lógica de comunicación y persistencia.

**Objetivo:**
- Desacoplar la lógica de datos del resto de la app.
- Facilitar el testing y la migración de tecnologías (ej: LocalStorage a Firestore).

## styles/
Archivos de estilos globales, variables, temas, utilidades CSS/SCSS. Puede incluir integración con el sistema de diseño y fuentes.

**Objetivo:**
- Centralizar la configuración visual y los estilos globales.
- Facilitar la personalización y el mantenimiento del diseño.
