import { useCounter } from "../other/useCounter";

export const CounterComponent = () => {
    const {count, increment, decrement} = useCounter();

    return (
        <div>
            {String(count)}
            <br/>
            <button onClick={increment} >+</button>
            <button onClick={decrement} >-</button>
        </div>
    )
}

