import React from 'react'
import ReactDOM from 'react-dom/client'

// Para poder crear elemkentos de React en el DOM
// Importante: ReactDOM.createRoot es la nueva forma de renderizar en React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<h1>Hello, World!</h1>)