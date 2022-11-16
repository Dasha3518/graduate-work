import { bottle, grapefruit } from "../../assets"
import style from  './style.module.css';
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const Mainpage = () => {
    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate("/shop")
    };

    return(
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.main__banner}>
                    <h2 className={style.main__title}>
                        A New Kind <br/>of Juice
                    </h2>
                    <h5 className={style.main__text}>
                        2-5g sugar. 9g fiber. 9 delicious flavors.
                    </h5>
                    <Button type='primary' text={"Shop JUMJi"} onClick={navigateToShop}/>
                </div>
                <div>
                    <img src={grapefruit} alt="" className={style.grapefruit} />
                </div>
                <img src={bottle} alt="" className={style.bottle} />
            </div>
        </main>
    )
}