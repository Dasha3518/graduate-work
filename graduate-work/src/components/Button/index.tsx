import style from  './style.module.css';

type ButtonColorType = 'primary' | 'transparent' | 'footerbutton' | 'transparentPing'; 
interface Props {
    text?: string;
    onClick?: () => void;
    disabled?: boolean;
    type: ButtonColorType; 
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