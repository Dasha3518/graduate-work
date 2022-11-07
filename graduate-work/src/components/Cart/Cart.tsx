import React from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/store.hooks';
import { Button } from '../Button';
import { getCartProducts, getTotalPrice, removeFromCart } from './cart.slice';
import style from  './style.module.css';

export const Cart = () => {
    
    const cartProducts = useAppSelector(getCartProducts);
    const totalPrice = useAppSelector(getTotalPrice)
    const dispatch = useAppDispatch()

    const handleRemoveFromCart = (productId: number) => dispatch(removeFromCart(productId))

    return (
        <div className={style.cart}>
            <div className={style.container}>
                    <h2>Cart</h2>
                    <h5>Your order amount: {totalPrice}$</h5>
                    <div className={style.cartli}>
                        {cartProducts.map(product => (<div key={product.id}>
                            <li> 
                            <img src={`${product.image}`} alt="" />
                                <span>product: 	&nbsp;<h3>{product.title}</h3> </span>
                                <span>amount: 	&nbsp;<h3>{product.amount}</h3></span>
                                <Button type='primary' text='Remove from Cart' onClick ={() => handleRemoveFromCart(product.id)}/>
                            </li>
                        </div>))}
                    </div>
            </div>
        </div>
    );
}

export default Cart