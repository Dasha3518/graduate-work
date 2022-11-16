import style from  './style.module.css';
import {peachy, orange, lemon} from '../../assets';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '../Container';
import { Title } from '../Title';

export const Sample= () => {
    const navigate = useNavigate()
    const navigateToShop = () => {
        navigate("/shop")
    }
    
    return(
        <div className={style.blogSambler}>
            <Container>
                <Title text='The Sampler'/>
                <div className={style.blogSamblerContent}> 
                    <img src={peachy} alt="" className={style.peachy} />
                    <div className={style.blogSamblerPic}>
                        <img src={orange} alt="" className={style.girls} />
                        <img src={lemon} alt="" className={style.girls} />
                        <h5 className={style.blogSamblerText}>Our Sampler gives you, and your tastebuds,
                            a chance to experience six of our flavors.
                            Inside you’ll find the following assortment:</h5>
                        <h5 className={style.blogSamblerTextFruits}>2x Lime<br/>
                            2x Lemon<br/>
                            2x Ogange<br/>
                            2x Grapefrait</h5>
                        <Button type="primary" text={"Shop Now"} onClick={navigateToShop}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}