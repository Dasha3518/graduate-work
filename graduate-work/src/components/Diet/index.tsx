import style from './style.module.css';
import { blogbottle, line} from '../../assets';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '../Container';

export const DietJuice = () => {
    const navigate = useNavigate()
    const navigateToShop = () => {
        navigate("/shop")
    }
    return (
            <div className={style.blogDiet}>
                <Container>
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
                        <Button type="transparent" text={"Shop Now"} onClick={navigateToShop}/>
                    </div>
                </Container>
            </div>
    )
}