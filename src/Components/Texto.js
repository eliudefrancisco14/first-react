import styles from './Texto.module.css'


function Texto() {
    return (
        <div>
            <h1>Mais um parágrafo </h1>
            <p className={styles.textoContent}>Este é um texto simples.</p>
        </div>
    )
}

export default Texto