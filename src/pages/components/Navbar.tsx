import React, {useState} from "react"

function Navbar() {
    const [counter, setCounter] = useState(0);

    return <div>
        <nav>
            <h2>Navbar</h2>
        </nav>
        <p>Counter <span>{}</span></p>
        <button>Add</button>
    </div>
}

export default Navbar