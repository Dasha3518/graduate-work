import style from  './style.module.css';
import { jumji} from '../../assets';
import { Button } from '../Button';

export const Healthy= () => {
    return(
        <div className={style.blogHealthy}>
        <div className={style.container}>
            <h2 className={style.blogHealthyTitle}>Healthy Meets Delicious</h2>
            <h5 className={style.blogHealthyText}>Enjoy our take on the classic flavors you know and love.</h5>
            <Button type="primary" text={"Shop The Flavors"}/>
            <img src={jumji} alt="" className={style.jumji} />
            
        </div>
    </div>
    )
}