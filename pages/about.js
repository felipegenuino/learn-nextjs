function gerarLista(final = 1){
    const lista = []
    for(let i = 1; i <= final; i++) {
         lista.push(<span>{i}</span>)
    }
    return lista
}


export default function lista(){
    return (
        <ul>
            <li>{gerarLista(11)}</li>
            <li>{gerarLista(4)}</li>
            <li>{gerarLista()}</li>
        </ul>
    )
}