import style from  './style.module.css';
import { classiclime, gingerlemon, grepefruiftvanilla, orangecream, tropicalgrepefruit,
    vintagepineapple, iconsingle, line } from '../../assets';
import { Button } from '../Button';
import { IBasketProducts } from '../../redux/reducers/basket';
import { ProductsList } from '../ProductsList';
import { IProducts } from '../../types/products';


export const Single = () => {
    return (
    <div className={style.packsshop}>
        <div className={style.container}>
                <h2 className={style.packssopTitle}>Single Flavor Packs</h2>
                <h5 className={style.packssopText}>Already have your eyes on a flavor? 
                Get 6 refreshing cans of your choice delivered directly to you.</h5>
                <div >
                    <div  >
                    <ProductsList products={[]} /> 
                    </div>
                </div>
                <div className={style.iconsingle}>
                    <img src={iconsingle} alt="" />
                </div>
            </div>
        </div>
    )
};