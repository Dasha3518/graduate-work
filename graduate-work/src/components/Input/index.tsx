import { ChangeEventHandler } from 'react';
import styles from './style.module.css';

type InputColorType = 'form'| 'footerinput'; 
interface Input {
        value?: string;
        placeholder?: string;
        refObj?: any;
        onChange?: ChangeEventHandler<HTMLInputElement>;
        onFocus?: () => void;
        onBlur?: () => void;
        error?: string;
        name?: string;
        required?: boolean;
        pattern?: string;
        type: InputColorType;
        minLength?: number;
        maxLength?: number;
    }

const getInputStyle =(type: InputColorType) => {
    if (type === 'form'){
        return styles.form;
    }
    if (type === 'footerinput'){
        return styles.footerinput;
    }
}

export const Input = (props: Input) => {
    return (
        <label>
            <input
                ref={props.refObj}
                className={`${styles.input} ${getInputStyle(props.type)} ${
                    props.error ? styles.error : ""
                    }`}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onFocus={props.onFocus}
                required={props.required}
                name={props.name}
                pattern={props.pattern}
                type={props.type}
                minLength={props.minLength}
                maxLength={props.maxLength}
            ></input>
            <p style={{ color: "red" }}>{props.error}</p>
        </label>
        );
};