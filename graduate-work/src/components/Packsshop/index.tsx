import style from  './style.module.css';
import { bottle1, card,bottle2,bottle3,bottle4  } from '../../assets';
import { Button } from '../Button';


export const PacksShop = () => {
    return(
        <div className={style.packsshop}>
                <div className={style.container}>
                    <h2 className={style.packssopTitle}>Variety Packs</h2>
                    <h5 className={style.packssopText}>Haven’t found your favorite flavor or have a few favorite flavors?
                    Try a variety pack to <br/> have a few flavors in one refreshing pack.</h5>
                    <div className={style.packsshopBottle}>
                        <div>
                            <img src={bottle2}  alt="" />
                            <h3>The Samper</h3>
                            <h5>Try them all in one delicious pack</h5>
                            <Button type="transparentPing" text={"Add to Basket"}/>
                        </div>
                        <div>
                            <img src={bottle1}  alt="" />
                            <h3>Best Sellers Pack</h3>
                            <h5>The world’s favorite flavors unite in one epic pack</h5>
                            <Button type="transparentPing" text={"Add to Basket"}/>
                        </div>
                        <div>
                            <img src={bottle3}  alt="" />
                            <h3>Fruity Variety Pack</h3>
                            <h5>Our most popular fruit flavors in one deliciously bright pack</h5>
                            <Button type="transparentPing" text={"Add to Basket"}/>
                        </div>
                        <div>
                            <img src={bottle4}  alt="" />
                            <h3>Fruity Pops</h3>
                            <h5>A sweet, sweet pack that will leave you tickled fruity</h5>
                            <Button type="transparentPing" text={"Add to Basket"}/>
                        </div>
                        <div className={style.card}>
                            <img src={card}  alt="" />
                            <h3>Gift Card</h3>
                            <Button type="transparentPing" text={"Add to Basket"}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}