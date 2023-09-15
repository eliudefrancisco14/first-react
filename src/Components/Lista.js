import styles from './Texto.module.css'


function Lista({itens}) {
    return (
        <>
            <h3>Lista de algumas TECs</h3>
            { itens.length > 0 ? (
             itens.map((item,index) => 
             <p key={index} className={styles.textoContent}>{item}</p>
             )
             ): (
            <p>Não tem nenhum item na lista</p>
             )
            }
        </>
    )
}

export default Lista