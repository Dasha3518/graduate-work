import { useAppDispatch, useAppSelector } from '../../redux/store.hooks';
import { Button } from '../Button';
import { Product } from '../Products/products.slice';
import { addToCart,getCartProducts, getTotal, getTotalPrice, removeFromCart, clearCart } from './cart.slice';
import style from  './style.module.css';

export const Cart = () => {
    const totalAmount = useAppSelector(getTotal);
    const cartProducts = useAppSelector(getCartProducts);
    const totalPrice = useAppSelector(getTotalPrice);

    const dispatch = useAppDispatch();
    const handleRemoveFromCart = (productId: number) => dispatch(removeFromCart(productId))
    const handleAddFromCart = (product: Product) => dispatch(addToCart(product));
    const handleClearCart = () => {
        dispatch(clearCart())
        return alert('Спасибо за заказ!')
    }


    if(totalAmount ===0){
        return(
        <div className={style.cart}>
            <div className={style.container}>
                <h2 className={style.titleCart}>Your cart is empty, add products</h2> 
                <h5>Your order amount: {totalPrice} $</h5>
                <div className={style.nameTable}>
                    <h3>Product</h3>
                    <h3>Amount</h3>
                    <h3>Price</h3>
                </div> 
            </div>
        </div>
        )        
    } else{
        return (
            <div className={style.cart}>
                <div className={style.container}>
                    <h2 className={style.titleCart}>Cart</h2> 
                    <h5>Your order amount: {totalPrice} $</h5>
                    <div className={style.nameTable}>
                        <h3>Product</h3>
                        <h3>Amount</h3>
                    </div>
                    {cartProducts.map(product => (<div key={product.id}>
                        <form>
                            <span >
                                <img src={`${product.image}`} alt="" />
                                <h4>{product.title}</h4>
                            </span> 
                            <span className={style.amount}>
                                <Button type='cart' text='+' onClick={() => handleAddFromCart(product)}/>
                                <h4>{product.amount}</h4>
                                <Button type='cart' text='-' onClick ={() => handleRemoveFromCart(product.id)}/>
                            </span>
                            <h4 className={style.price}>{product.price * product.amount} $</h4>
                        </form>
                    </div>))}
                        <Button  text='Order' type='primary' onClick={handleClearCart}/>
                    
                </div>  
            </div>
        );
    }
}

export default Cart
