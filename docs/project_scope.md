# Alcance del Proyecto: "Movie Agenda"

## Descripción General

Movie Agenda es una aplicación web que permite a los usuarios explorar películas y series utilizando la API de The Movie Database (TMDB). 

El usuario podrá visualizar un catálogo dinámico con información detallada de cada película o serie, y agregar aquellas que le interesen a una agenda personalizada (playlist), incluyendo una nota personal explicando por qué desea verla.

El objetivo principal es crear una experiencia visual atractiva y organizada para gestionar contenido audiovisual pendiente por ver.

---

## Usuario Objetivo

- Personas entre 15 y 40 años.
- Usuarios que consumen películas y series frecuentemente.
- Personas que desean organizar qué contenido quieren ver en el futuro.
- Usuarios que disfrutan explorar catálogos tipo Netflix o Disney+.

---

## Funcionalidades Principales (Core Features)

### 1. Exploración de Películas y Series
- Consumir la API de TMDB.
- Mostrar una grilla (grid) de tarjetas (cards).
- Cada tarjeta debe incluir:
  - Imagen (poster)
  - Título
  - Año de lanzamiento
  - Breve descripción
  - Botón "Agregar a mi agenda"

### 2. Vista de Detalle
- Al hacer clic en una tarjeta, se mostrará:
  - Imagen ampliada
  - Descripción completa
  - Géneros
  - Puntuación
  - Fecha de estreno

### 3. Agenda Personal (Playlist)
- Sección separada donde el usuario podrá ver:
  - Las películas/series agregadas.
  - Un pequeño texto personalizado escrito por el usuario.
- Cada elemento agregado debe permitir:
  - Editar la nota personal.
  - Eliminar de la agenda.

### 4. Persistencia de Datos (Fase 1)
- Los datos se almacenarán en LocalStorage.
- No habrá autenticación en la primera versión.

---

## Reglas de Negocio

- No se requiere registro de usuario en la primera versión.
- No se permiten elementos duplicados en la agenda.
- La aplicación debe ser responsive (Mobile First).
- El diseño debe ser limpio y centrado en el contenido visual.
- La API de TMDB debe manejar correctamente los errores de conexión.

---

## Futuras Mejoras (Fase 2 y 3)

- Filtros por género.
- Buscador por nombre.
- Autenticación de usuario.
- Base de datos en Firebase.
- Migración a React.
- Deploy público.