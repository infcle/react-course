import React from 'react'
import ReactDOM from 'react-dom/client'

// Para poder crear elementos de React en el DOM
// Importante: ReactDOM.createRoot es la nueva forma de renderizar en React 18 +
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hello, World!</h1>)


/* function Greting() {
    const name = 'infcle';
    return <h1>Hello, World {name}!</h1>
} */

function Greting() {
    const married = false;
    return <h1>{married ? 'estoy casado 🤗​' : 'No estoy casado ​😉​'}</h1>
}

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

function Greting2() {
    function add(x, y) {
        return x + y;
    }

    return (
        <>
            <h1> {add(20, 8)}</h1>
        </>
    )
}
// manejo de etiquetas fragment
root.render(
    <>
        <Greting2 />
        <Greting2 />
        <Greting2 />
    </>

);



