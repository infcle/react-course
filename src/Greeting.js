export function Greting() {
    const married = false;
    return <h1>{married ? 'estoy casado 🤗​' : 'No estoy casado ​😉​'}</h1>
}

export function Greting1() {
    const name = 'infcle';
    return <h1>Hello, World {name}!</h1>
}

export function Greting2() {
    const user = {
        firstName: 'infcle',
        lastName: 'Coronel',
    }

    // return <h1> {JSON.stringify(user)}</h1>
    return (
        <div>
            <h1>{user.firstName}</h1>
            <h2>{user.lastName}</h2>
        </div>
    )
}

export function Greting3() {
    function add(x, y) {
        return x + y;
    }

    return (
        <>
            <h1> {add(20, 8)}</h1>
        </>
    )
}