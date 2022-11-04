import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TState } from '../../redux/store';
import { ProductsItem } from '../ProductsItem';
import { ProductsList } from '../ProductsList';
import style from  './style.module.css';



export const Basket = () => {
    //const [selectedTab, setSelectedTab] = useState<Tabs>("all");
    const product  = useSelector((state: TState) => state.basketReducer.selectedProducts)


    return(
        <div className={style.basket}>
            <div className={style.container}>
                <ul>
                    <ProductsList products ={product} />
                </ul>
            </div>           
        </div>
    )
}

