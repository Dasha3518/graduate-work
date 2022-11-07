import { useSelector } from 'react-redux';
import { getProductsSelector, Product} from './products.slice';
import { useAppDispatch } from '../../utils/store.hooks';
import { addToCart } from '../Cart/cart.slice';
import style from  './style.module.css';
import { Button } from '../Button';

export const ProductsList = () => {

    const products = useSelector(getProductsSelector)
    const dispatch = useAppDispatch()

    const addToCartHandler = (product: Product) => dispatch(addToCart(product))

    return (
        <div className={style.packsshop}>
            <div className={style.container}>
            <h2 className={style.packssopTitle}>Goods of our store</h2>
            {/* <h5 className={style.packssopText}>Already have your eyes on a flavor? 
                Get 6 refreshing cans of your choice delivered directly to you.</h5> */}
                <div className={style.fff}>
                    {products.map(product => <div key={product.id} className={style.packsshopBottle}>
                        <img src={`${product.image}`} alt="" />
                        <h3>{`${product.title}`}</h3>
                        <h5>{`${product.text}`}</h5>
                        <h5>{`${product.price}`}</h5>
                        <Button type='primary' text='Add to Cart' onClick={() => addToCartHandler(product)}/>
                    </div>)}
                </div>

            </div>

        </div>

        
    );
}

export default ProductsList

