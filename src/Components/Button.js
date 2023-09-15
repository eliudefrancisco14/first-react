import styles from "./Button.module.css"

function Button() {
    function meuBotao() {
        return (
            alert("Clicou")
            )
    }

    return (
        <div className="App">
            <h1>Este é o teste do Botão</h1>
            <button onClick={meuBotao} className={styles.btn}>Clica aqui</button>
        </div>
    )
}

export default Button