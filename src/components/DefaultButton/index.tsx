import styles from "./styles.module.css";

type DefaultButtonProps = { // Tipando a classe DefaultButtonProps
    children: string; // icon: propriedade React.ReactNode estrutura
} 
export function DefaultButton({
    children    
}:DefaultButtonProps)
{
    return(
        <>
            <button className={`${styles.button}`}> {children}</button>
        </>
    )
}