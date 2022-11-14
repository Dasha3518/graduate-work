import style from "./style.module.css";

interface Props {
    text: string;
}

export const Description = (props: Props) => {
  return <h1 className={style.text}>{props.text}</h1>;
};
