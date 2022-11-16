import style from  './style.module.css';
import { jumji} from '../../assets';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '../Container';
import { Title } from '../Title';
import { Description } from '../Description';

export const Healthy= () => {
    const navigate = useNavigate()
    const navigateToShop = () => {
        navigate("/shop")
    }
    return(
        <div className={style.blogHealthy}>
            <Container>
                <Title text='Healthy Meets Delicious'/>
                <Description text='Enjoy our take on the classic flavors you know and love.'/>
                <Button type="primary" text={"Shop The Flavors"} onClick={navigateToShop}/>
                <img src={jumji} alt="" className={style.jumji} />
            </Container>
        </div>
    )
}