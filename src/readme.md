# Extensión de Componentes en React

Los componentes pueden tener la extensión `.jsx`.

- En **Create React App** no es obligatorio usar `.jsx`.
- En **Vite** sí se requiere la extensión `.jsx`.

## Props en React

Las **props** (propiedades) son parámetros que se utilizan para pasar información de un componente padre a un componente hijo en React. Permiten que los componentes sean reutilizables y dinámicos.

### Ejemplo de uso de props

```jsx
// Componente hijo que recibe props
function Saludo(props) {
    return <h1>Hola, {props.nombre}!</h1>;
}

// Componente padre que utiliza el componente hijo
function App() {
    return <Saludo nombre="Juan" />;
}
```

En este ejemplo, el componente `App` pasa la prop `nombre` al componente `Saludo`, que la utiliza para mostrar un mensaje personalizado.
Props:
son parametros de java script
