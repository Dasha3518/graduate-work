import { bottle2, seller, vector } from '../../assets';
import style from  './style.module.css';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

export const Olipop = () => {
    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate("/shop")
    };
    return(
        <div className={style.olipop}> 
            <div className={style.container}>
                <div className={style.olipopText}>
                    <h2>The Olipop<br/>Sampler</h2>
                    <h5>Sample every flavor in the lineup<br/> with our Variety Pack</h5>
                    <Button type="transparent" text={"Shop Now"} onClick={navigateToShop}/>
                </div>
                <div className={style.olipopBottle}>
                <img src={bottle2}  alt="" className={style.olbottle} />
                <img src={seller}  alt=""  className={style.seller}/>
                </div>
            </div>
        </div>
    )
}