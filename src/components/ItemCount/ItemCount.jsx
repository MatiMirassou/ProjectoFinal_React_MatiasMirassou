import { useState } from 'react'

function ItemCount({ initialValue = 1, stock, onAdd }) {
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        if (count < stock) {
            setCount(count => count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count => count - 1)
        }
    }

    return (
        <>
        <div>
            <h1>{count}</h1>
            <div>
            <button style={{ margin: "5px" }} className="btn btn-primary"  onClick={increment}>+</button>
            <button style={{ margin: "5px" }} className="btn btn-primary" onClick={() => onAdd(count)}>Add to Chart</button>
            <button style={{ margin: "5px" }} className="btn btn-primary" onClick={decrement}>-</button>
            </div>
        </div>
        </>
    );
}

export default ItemCount