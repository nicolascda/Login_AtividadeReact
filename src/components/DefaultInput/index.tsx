import styles from "./styles.module.css";
import React from "react";

type DefaultInputProps = {
    Icon?: React.ElementType;
    id: string;
    labelText: string;
    type: string;
    placeholder: string;
} & React.ComponentProps<'input'>

export function DefaultInput({
    Icon, id, type, labelText, placeholder, ...rest
    }:DefaultInputProps){
    
    return(
        <>
            <label htmlFor={id}>{labelText}</label>
            <div className={styles.IconePlaceholder}>
                {Icon && <Icon className={styles.inputIcon} size="1.25rem" />}
                <input className={styles.input} type = {type} id = {id}  placeholder = {placeholder} {...rest}/>
            </div>
            
        </>
        // <input className={styles.inputTask} placeholder= "Estudar" id="meuInput "type="Text"/>
    );

}
