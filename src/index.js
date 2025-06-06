import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greting, Greting1, Greting2, Greting3 } from './Greeting'
import Product, { NavBar } from './Product'


// Para poder crear elementos de React en el DOM
// Importante: ReactDOM.createRoot es la nueva forma de renderizar en React 18 +
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hello, World!</h1>)


// self closing task
root.render(<Greting />)


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
        <Greting />
        <Greting1 />
        <Greting2 />
        <Greting3 />
        <Product />
        <NavBar />
    </>

);



