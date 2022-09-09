export default function(props){
   return props.pequeno ? (
    <>
        <h1>{props.nome} {props.sobrenome}</h1> 
    </>
   ) : (
    <>
        <strong>{props.nome} </strong>
        <span>{props.sobrenome}</span>
        <br />
    </>
   )
}