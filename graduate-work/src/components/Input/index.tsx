import { ChangeEventHandler } from 'react';
import styles from './style.module.css';

type InputColorType = 'form'; 
interface Input {
    value?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    type: InputColorType; 
}

const getInputStyle =(type: InputColorType) => {
    if (type === 'form'){
        return styles.form;
    }
}

export const Input = (props: Input) => {
    return (
        <input
            className={`${styles.input} ${getInputStyle(props.type)}`}
            value={props.value}  
            placeholder={props.placeholder}
            onChange={props.onChange}> 
        </input>
        );
};