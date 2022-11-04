import { IProducts } from "../../types/products";
import style from "./style.module.css";
import { MouseEventHandler, ReactEventHandler, useState } from "react";
import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { basket } from "../../assets";


interface IProps extends IProducts{
    isLarge?: boolean;
}

export const ProductsItem = (props: IProps) => {
    const [image, setImage] = useState(props.image);
    const dispatch = useDispatch();

    const {isLarge, ...product} = props;

    const handleError:ReactEventHandler<HTMLImageElement> = (event) => {
        setImage("/picture3.png")
    }
    
    const selectedProducts: MouseEventHandler<HTMLImageElement> = (event) => {
        event.stopPropagation()
        dispatch({type: ACTIONS.SELECTED_PRODUCTS, products: product})
    }
    return(
        <>
            {image ? (
                <img className={`${style.image} ${props.isLarge ? style.largeImage : ""}`}
                src={props.image} alt="" 
                onError={handleError}
                />
            ) : (
                <img className={style.image} src={"/picture3.png"} alt=""
                />
            )}
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.text}>{props.text}</p>
            <img src={basket} onClick={selectedProducts}/>
        </>)
}