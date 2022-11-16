import style from  './style.module.css';
import { lemonad, enjoy} from '../../assets';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '../Container';

export const Enjoy= () => {
    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate("/shop")
    };
    
    return(
        <div className={style.blogEnjoy}>
            <Container>
                <div className={style.blogEnjoyContent}>
                    <div className={style.blogEnjoyRight}>
                        <img src={lemonad} alt="" className={style.lemonad}/>
                        <h5 className={style.blogText}>Join the JumJi Subscription Fam and never run out of JumJi,
                            save money on every order, always receive free shipping,
                            easily swap flavors via text, and get help when you need it
                            with our dedicated VIP concierge.</h5>
                    </div>
                    <div className={style.blogEnjoyLeft}>
                        <h2 className={style.blogTitle}>Enjoy JumJi <br/> on Repeat</h2>
                        <img src={enjoy} alt="" className={style.enjoy}/>
                        <div className={style.blogEnjoyButton}>
                            <Button type="primary" text={"Shop Now"} onClick={navigateToShop}/>
                        </div>
                        </div>
                    </div>
                </Container>
        </div>
    )
};