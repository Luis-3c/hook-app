import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyProcess = (iterations) => {
    for (let index = 0; index < iterations; index++) {
        console.log('Here we go!');
    }
    return `${iterations} iterations done`;
 }

export const MemoHook = () => {

    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyProcess(counter), [counter]) //memoriza una tarea y solo lo vuelve a ejecutar cuando sus dependencias cambian
    
    return (
        <>
            <h1>Counter: <small> {counter} </small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment()}>
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}>
                Show / Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
