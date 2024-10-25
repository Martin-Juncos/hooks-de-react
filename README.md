### Introducción a React Hooks

React Hooks son una característica introducida en React 16.8 que permite a los desarrolladores usar estado y otras características de React sin necesidad de escribir componentes de clase. Los hooks simplifican la lógica del ciclo de vida y permiten que los componentes funcionales sean más potentes y reutilizables [[1](https://es.legacy.reactjs.org/docs/hooks-intro.html)].

### ¿Qué son los Hooks?

Los hooks son funciones que "enganchan" características de React, como el estado o el ciclo de vida, a componentes funcionales. Antes de los hooks, estas características solo se podían manejar usando componentes de clase. Los hooks permiten organizar y compartir lógica reutilizable sin la complejidad de los componentes de clase [[4](https://es.legacy.reactjs.org/docs/hooks-overview.html)].

### Descripción de los principales Hooks

1. **`useState`**: Permite agregar y manejar estado local dentro de un componente funcional. Es una de las formas más simples para que un componente reaccione a las interacciones del usuario.

2. **`useEffect`**: Utilizado para ejecutar efectos secundarios en un componente. Esto incluye tareas como hacer solicitudes HTTP, sincronizar con APIs o manejar suscripciones. Puede configurarse para ejecutarse tras cada renderizado, solo al montar, o cuando ciertas dependencias cambian.

3. **`useContext`**: Facilita el acceso al contexto global de React, lo cual permite compartir información entre componentes sin necesidad de pasar props manualmente en cada nivel.

4. **`useRef`**: Permite crear referencias que se mantienen a través de renderizados sin provocar nuevas actualizaciones del componente. Es útil para manipular elementos del DOM o para mantener valores que no desencadenan renders.

5. **`useReducer`**: Ofrece una alternativa a `useState` para manejar estados más complejos. Es similar a un patrón de Redux en el que se define un "reducer" para gestionar los cambios de estado.

6. **`useCallback`**: Memoriza funciones para evitar que se vuelvan a crear en cada render. Es útil para optimizar el rendimiento, especialmente cuando se pasa una función a un componente hijo.

7. **`useMemo`**: Memoriza valores calculados para evitar recalcularlos en cada render. Esto mejora el rendimiento al almacenar resultados de cálculos costosos.

8. **`useImperativeHandle`**: Personaliza las instancias de referencia cuando se usa `React.forwardRef`. Se emplea principalmente para controlar cómo otros componentes acceden a ciertas funcionalidades internas.

9. **`useLayoutEffect`**: Similar a `useEffect`, pero se ejecuta de manera síncrona después de que todas las mutaciones del DOM hayan sido realizadas, lo cual lo hace útil para leer y aplicar cambios al DOM inmediatamente.
