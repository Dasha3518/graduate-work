import style from  './style.module.css';

type ButtonColorType = 'primary' | 'transparent' | 'footerbutton'; 
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