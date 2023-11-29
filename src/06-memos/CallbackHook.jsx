import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback( // se memoriza la funcion y React la mantiene siempre en el mismo espacio en memoria
        (value) => {
            setCounter((c) => c + value); // de esta manera se obtiene siempre el valor actual del counter
        },
        [],
    )


    /* const incrementFather = () => {
        setCounter(counter + 1);
    } */

    return (
        <>
            <h1>useCallback Hook: {counter} </h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}
