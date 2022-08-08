import { useState } from "react"
import { Headers } from "./style"

function Header({setSearch}){
    
    const [input, setInput] = useState('')

    return(
        <Headers>
            <div className="titulo">
                <h1>Kenzie</h1>
                <h2>Burger</h2>
            </div>
            <div className="pesquisa">
                <input type='text' value={input} onChange={(event) => {setInput(event.target.value)}}></input>
                <button onClick={() => setSearch(input.toLowerCase())}>Pesquisar</button>
            </div>
        </Headers>
    )
}

export default Header