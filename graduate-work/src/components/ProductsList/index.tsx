import { IProducts } from "../../types/products";
import { ProductsItem } from "../ProductsItem";
import style from "./style.module.css";
import { classiclime, gingerlemon, grepefruiftvanilla, orangecream, tropicalgrepefruit,
    vintagepineapple} from '../../assets';
import { Basket } from "../Basket.tsx";
import { useState } from "react";
// import { Button } from "../Button";



interface IProps {
    products:IProducts[];
}

export const ProductsList = (props: IProps) =>{

const singleProducts = [
    {
        image: orangecream,
        title: "Orange Cream",
        text: "Your favorite summertime treat, reimagined",
    },
    {
        image: tropicalgrepefruit,
        title: "Tropical  Grapefruit",
        text: "Like a vacation for your tastebuds",
    },
    {
        image: classiclime,
        title: "Classic Lime",
        text: "A modern take on the classic cream juice",
    },
    {
        image: gingerlemon,
        title: "Ginger Lemon",
        text: "A kick of ginger and a tang of lemon juice",
    },
    {
        image: vintagepineapple,
        title: "Vintage Pineapple",
        text: "Old-fashioned taste meets new-fashioned ingredients",
    },
    {
        image: grepefruiftvanilla,
        title: "Grapefruift Vanilla",
        text: "Like grapefruift pie in a can",
    }
]

    return (
        <div className={style.fff}>
        {singleProducts.map((item) => {
        
        return (
        <div >
            <ProductsItem
            image={item.image}
            text={item.text}
            title={item.title}

        />
        </div>
        );
        })}
    </div>
    )
}