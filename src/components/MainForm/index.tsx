import styles from "./styles.module.css"

type MainFormProps = {
    children: React.ReactNode;
}

export function MainForm({children}:MainFormProps)
{
    return (
    <>
        <form className={styles.card}>
            <h1 className={styles.cardTitulo}> Login</h1>
            <div className={styles.cardConteudo}>
                {children}
            </div>
        </form>
    </> 
    )
}