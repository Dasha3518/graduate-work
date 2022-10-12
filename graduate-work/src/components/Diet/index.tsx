import style from  './style.module.css';
import { blogbottle, line, jumji, peachy, orange, lemon, lemonad, enjoy} from '../../assets';
import { Button } from '../Button';

export const DietJuice = () => {
    return (
            <div className={style.blogDiet}>
                <div className={style.container}>
                    <div className={style.blogContent}>
                        <div className={style.blogBottle}>
                            <img src={blogbottle} alt="" className={style.bottle} />
                            <img src={line} alt="" className={style.line} />
                        </div>
                        <div className={style.blogInformation}>
                            <h3 className={style.blogTitle}>Not Diet Juice, BETTER <br></br>Juice </h3>
                            <h5 className={style.blogText}>JumJi tastes like the soda you grew up sipping,
                                but with the added benefit of microbiome and digestive health
                                support. With plant fiber, prebiotics, botanicals,
                                and a touch of magic, we made juice healthier AND more
                                delicious!</h5>
                        </div>
                    </div>
                    <div className={style.blogButton}>
                        <Button type="transparent" text={"Shop Now"}/>
                    </div>
                </div>
            </div>
    )
}