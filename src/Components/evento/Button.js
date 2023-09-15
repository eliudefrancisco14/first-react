import styles from "../Button.module.css"

function Button(props) {
    return <button onClick={props.event} className={styles.btn}>{props.text}</button>
}

export default Button