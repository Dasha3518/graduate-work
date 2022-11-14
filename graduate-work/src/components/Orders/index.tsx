import { useAppSelector } from '../../redux/store.hooks';
import { getOrderProducts } from './order.slice';
import style from  './style.module.css';

export const MyOrders = () => {
    
    const orderProducts = useAppSelector(getOrderProducts);

    return (
        <div className={style.cart}>
            <div className={style.container}>
                <h2>My order</h2>
                <div className={style.cartli}>
                        {orderProducts.map(product => (<div key={product.id}>
                            <li> 
                            <img src={`${product.image}`} alt="" />
                                <span>product: 	&nbsp;<h3>{product.title}</h3> </span>
                                <span>amount: 	&nbsp;<h3>{product.amount}</h3></span>
                            </li>
                        </div>))}
                </div>
            </div>
        </div>
    );
}