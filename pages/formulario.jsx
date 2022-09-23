import { useState } from "react";

export default function Formulario(){
    const [valor, setValor] = useState("");
    function alterarInput(e){
        setValor(valor+ "!")
    }
    return(
        <div>
            {valor} <br/> <br/>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
            <button onClick={alterarInput}>
                Alterar
            </button>
        </div>
    )
}