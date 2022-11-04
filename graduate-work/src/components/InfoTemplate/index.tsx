import { ReactNode, useContext } from "react";
import { Button } from "../Button";
import style from "./style.module.css";

interface IProps {
    title: string;
    children: ReactNode;
    textBtn: string;
    onClick: () => void;
}
export const InfoTemplate = (props: IProps) => {

    return (
        <div className={style.template}>
            <div className={style.container}>
                <h1 className={style.title}>
                {props.title}
                </h1>
                <p className={style.text}>
                {props.children}
                </p>
                <Button type="primary" text={props.textBtn} onClick={props.onClick} />
            </div>
    </div>
    );
};