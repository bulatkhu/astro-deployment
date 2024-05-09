import React, {useState} from "react"

function Navbar() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="flex justify-between mb-6 text-white">
            <nav>
                <h2>Navbar</h2>
            </nav>
            <p>Counter <span>{counter}</span></p>
            <div className="space-x-8">
                <button onClick={() => setCounter(counter => counter + 1)}>Add</button>
                <button onClick={() => setCounter(counter => counter - 1)}>Sub</button>
            </div>
        </div>
    )
}

export default Navbar