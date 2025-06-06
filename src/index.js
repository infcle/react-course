import React from "react";
import ReactDOM from "react-dom/client";
import {
  Greeting0,
  Greting,
  Greting1,
  Greting2,
  Greting3,
  UserCard,
} from "./Greeting";
import Product, { NavBar } from "./Product";

// Para poder crear elementos de React en el DOM
// Importante: ReactDOM.createRoot es la nueva forma de renderizar en React 18 +
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Hello, World!</h1>)

// self closing task
root.render(<Greting />);

// root.render(<Greting />)

// otra manera de llamar a un componente
/* root.render(
    <div>
        {Greting()}
        <Greting />
        <Greting></Greting>
    </div>
) */

// manejo de etiquetas fragment
root.render(
  <>
    <Greeting0 title="Hola Mundo" name="infcle" />
    <Greeting0 title="Hola React" name="Gatita" />
    <Greeting0 title="Hola JSX" />
    <Greeting0 title="Hola Javascript" />
    <Greeting0 title="Hola Infcle" />
    <Greting />
    <Greting1 />
    <Greting2 />
    <Greting3 />
    <Product />
    <NavBar />
  </>
);

root.render(
  <>
    <UserCard
      name="Grace Grillo"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{
        street: "Calle Falsa",
        number: 123,
        city: "Springfield",
      }}
      greet={function () {
        alert("Hello");
      }}
    />
  </>
);
