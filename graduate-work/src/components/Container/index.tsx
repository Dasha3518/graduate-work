import { useContext, ReactNode } from "react"
import { Context } from "../../App"
import style from "./style.module.css";

interface IProps {
    children: ReactNode;
}


export const Container = ({ children }: IProps) => {
    const values = useContext(Context);
    return (
        <div className={ style.container}>
        <div className={style.widthContainer}>{children}</div>
        </div>
    );
};