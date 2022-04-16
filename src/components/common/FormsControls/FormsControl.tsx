import React from "react";
import styles from './Forms.module.css'

type TextareaPropsType = {
    input: {}
    meta: {
        touched: boolean
        error: string
    }
    placeholder: string
}
export const TextArea = ({input, meta, ...props}: TextareaPropsType) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={ styles.formControl + ' ' + (hasError ? styles.error: '') } >
            <div>
                <textarea  {...input} {...props}/>
            </div>
            {  hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}: TextareaPropsType) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={ styles.formControl + ' ' + (hasError ? styles.error: '') } >
            <div>
                <input  {...input} {...props}/>
            </div>
            {  hasError && <span>{meta.error}</span>}
        </div>
    )
}