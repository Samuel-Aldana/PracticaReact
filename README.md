## Problemas encontrados y cómo los resolví

### Modelo de datos de los videojuegos

- Al inicio, puse una sola lista de pasos en cada videojuego, aunque cada juego tenía varios desbloqueables. También guardé costos como textos, por ejemplo `220 Geo`, y asigné la misma fecha de creación a los ocho juegos.
- Para corregirlo, pasé `steps` a cada objeto de `unlockables`, representé los pagos con cantidades numéricas y monedas en `paymentOptions`, y asigné fechas `createdAt` distintas. Así cada desbloqueable conserva sus instrucciones y los juegos se pueden ordenar por fecha.

### Rutas y componentes de React

- Al inicio, mezclé etiquetas JSX con las propiedades de las rutas, dejé las páginas como fragmentos sueltos y coloqué `Outlet` dentro de la navegación. La primera versión de `MainLayout` tampoco devolvía JSX.
- Para corregirlo, convertí cada página en un componente exportado, definí las rutas como objetos dentro de `createBrowserRouter`, hice que `App` devolviera `RouterProvider` y dejé `Navbar` y `Outlet` como elementos del layout. Comprobé que el texto de la página cambiaba entre Inicio, Juegos y una ruta desconocida.

### Estado en el componente Home

- Al inicio, declaré una función `Juegos` dentro de `Home` después del `return` y escribí `useState([games])`, usando `games` antes de definirlo. Por estar después del `return`, esa función no se ejecutaba.
- Para corregirlo, quité la función adicional y declaré `const [games, setGames] = useState([])` directamente dentro de `Home`, antes del `return`. El estado comienza como una lista vacía para recibir los juegos del servidor.

### Consulta de juegos desde Home

- Al inicio, dejé `useEffect` sin cerrar y escribí `../api/games/` como código suelto. Eso impedía que el archivo compilara y no enviaba una petición al servidor.
- Para corregirlo, cerré el efecto y usé `fetch('/api/games')`. Después convertí la respuesta con `response.json()` y guardé los datos con `setGames(data)`. Comprobé en la página que el estado contiene ocho juegos.

### Selección de juegos recientes

- Al inicio, intenté crear `recentGames` como una función dentro de `Home` y puse `export default` dentro del componente. Eso produjo un error de sintaxis; además, las tarjetas seguían usando directamente `games`.
- Para corregirlo, declaré `recentGames` como una lista antes del `return` y usé `recentGames.map(...)` para mostrar las tarjetas. Primero tomé las últimas tres posiciones, pero eso dependía del orden del JSON; después copié `games`, lo ordené por `createdAt` de más nuevo a más antiguo y tomé los primeros tres. Dejé `export default Home` al final del archivo.
