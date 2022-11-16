import { ReactNode, useContext } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { Title } from "../Title";
import style from "./style.module.css";

interface IProps {
    title: string;
    children: ReactNode;
    textBtn?: string;
    onClick: () => void;
};
export const InfoTemplate = (props: IProps) => {
    return (
        <div className={style.template}>
            <Container>
                <Title text={props.title}/>
                <p className={style.text}>
                {props.children}
                </p>
                <Button type="primary" text={props.textBtn} onClick={props.onClick} />
            </Container>
        </div>
    );
};