import { useSelector } from 'react-redux';
import { getProductsSelector, Product} from './products.slice';
import { useAppDispatch } from '../../redux/store.hooks';
import { addToCart } from '../Cart/cart.slice';
import style from  './style.module.css';
import { Button } from '../Button';
import { useContext } from 'react';
import { Context } from '../../App';
import { useNavigate } from 'react-router-dom';
import { Title } from '../Title';
import { Description } from '../Description';

export const ProductsList = () => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login")
    };

    const products = useSelector(getProductsSelector);
    const dispatch = useAppDispatch();

    const addToCartHandler = (product: Product) => dispatch(addToCart(product));
    

    return (
        <div className={style.packsshop}>
            <div className={style.container}>
            <Title text='Goods of our store'/>
            <Description text='In our store you will find products for every taste.'/>
                <div className={style.fff}>
                    {products.map(product => <div key={product.id} className={style.packsshopBottle}>
                        <img src={`${product.image}`} alt="" />
                        <h3>{`${product.title}`}</h3>
                        <h5>{`${product.text}`}</h5>
                        <div className={style.price}>
                            <h4>{`${product.price} 	 $`}</h4>
                            {user ? (
                                <Button type='primary' text='Buy' onClick={() => addToCartHandler(product)}/>
                            ): (
                                <Button type='primary' text='Buy' onClick={navigateToLogin}/>
                            )}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default ProductsList;
