import Pessoa from "../components/Pessoa";

export default function exemploTS(){
    return (
        <ul style={{listStyle: "none", padding: '10px'}}>
            <li><Pessoa nome="Felipe" idade={30} /></li>
            <li><Pessoa nome="Katerine" idade={21} /></li>
            <li><Pessoa nome="Marcelo" idade={52} /></li> 
            <li><Pessoa nome="Marcelo" /></li> 
        </ul>
    )
}