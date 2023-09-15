import Button from "./evento/Button"

function Evento(){

    function meuEvento() {
        return(
            alert("Clicou no primeiro evento")
        )
    }

    function otherEvento() {
        return(
            alert("Clicou no Outro evento")
        )
    }

    return (
        <div>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={otherEvento} text="Other evento" />
        </div>
    )
}

export default Evento