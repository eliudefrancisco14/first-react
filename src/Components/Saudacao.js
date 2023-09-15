import styles from './Texto.module.css'

function Saudacao({otherNome}) {
    return (
        <>
           {otherNome && (
            <p className={styles.textoContent}>Olá {otherNome}, Como vai?</p>
           )} 
        </>
    )
}

export default Saudacao