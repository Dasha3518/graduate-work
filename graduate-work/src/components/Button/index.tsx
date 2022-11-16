import { MouseEventHandler } from 'react';
import style from  './style.module.css';

type ButtonColorType = 'primary' | 'transparent' | 'footerbutton' | 'transparentPing' | 'logout' | 'cart'; 
interface Props {
    text?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    type: ButtonColorType; 
    btnType?: "button" | "submit" | "reset" | undefined;
}

const getButtonStyle = (type: ButtonColorType) => {
    if (type === 'primary') {
        return style.primary;
    }
    if (type === 'transparent') {
        return style.transparent;
    }
    if (type === 'footerbutton') {
        return style.footerbutton;
    }
    if (type === 'transparentPing') {
        return style.transparentPing;
    }
    if (type === 'logout') {
        return style.logout
    }
    if (type === 'cart') {
        return style.cart
    }
}


export const Button = (props: Props) => {
    return (
        <button className={`${style.button} ${getButtonStyle(props.type)} `}
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.text}
        </button>
    );
};