## Problemas encontrados y cómo los resolví

### Modelo de datos de los videojuegos

- Al inicio, puse una sola lista de pasos en cada videojuego, aunque cada juego tenía varios desbloqueables. También guardé costos como textos, por ejemplo `220 Geo`, y asigné la misma fecha de creación a los ocho juegos.
- Para corregirlo, pasé `steps` a cada objeto de `unlockables`, representé los pagos con cantidades numéricas y monedas en `paymentOptions`, y asigné fechas `createdAt` distintas. Así cada desbloqueable conserva sus instrucciones y los juegos se pueden ordenar por fecha.

### Rutas y componentes de React

- Al inicio, mezclé etiquetas JSX con las propiedades de las rutas, dejé las páginas como fragmentos sueltos y coloqué `Outlet` dentro de la navegación. La primera versión de `MainLayout` tampoco devolvía JSX.
- Para corregirlo, convertí cada página en un componente exportado, definí las rutas como objetos dentro de `createBrowserRouter`, hice que `App` devolviera `RouterProvider` y dejé `Navbar` y `Outlet` como elementos del layout. Comprobé que el texto de la página cambiaba entre Inicio, Juegos y una ruta desconocida.
