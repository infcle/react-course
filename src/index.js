import React from 'react'
import ReactDOM from 'react-dom/client'

// Para poder crear elemkentos de React en el DOM
// Importante: ReactDOM.createRoot es la nueva forma de renderizar en React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hello, World!</h1>)


function Greting() {
    return <div>
        <h1>Hello, World!</h1>
        <p>Este es un componente de React</p>
    </div>


}

root.render(Greting())
// root.render(<Greting />)

// otra manera de llamar a un componente
root.render(
    <div>
        {Greting()}
        <Greting />
        <Greting></Greting>
    </div>
)
