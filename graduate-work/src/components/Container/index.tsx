import { ReactNode } from "react";
import style from "./style.module.css";

interface IProps {
    children: ReactNode;
};


export const Container = ({ children }: IProps) => {
    return (
        <div className={ style.container}>
            <div className={style.widthContainer}>{children}</div>
        </div>
    );
};