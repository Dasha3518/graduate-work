import { ico, logopic } from '../../assets';
import style from  './style.module.css';

export const Header = () => {

    return(
        <header className={style.header}>
            <div className={style.container}>
                <ul className={style.pagelist}>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <a href="#">Learn</a>
                    </li>
                </ul>
                <div className={style.logo}>
                    <img src={logopic} alt="logo" />
                </div>
                <div>
                    <a href="#"><img src={ico} alt="ico"/></a>
                </div>
            </div>
        </header>
    )
}