import { Link, useNavigate } from 'react-router-dom';
import { basket, ico, logopic } from '../../assets';
import style from  './style.module.css';
import { NavBar } from '../NavBar';
import { useState } from "react";

export const Header = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/")
    }

    const [burgerMenu, setBurgerMenu] = useState(false);

    const openBurgerMenu = () => {
        setBurgerMenu(!burgerMenu)
    };

    const closeBurgerMenu = () => {
        setBurgerMenu(false);
    };

    return(
        <div>
        {burgerMenu ? <NavBar onClose={closeBurgerMenu} /> : null}
        <header className={style.header}>
            <div className={style.container}>
                <ul className={style.pagelist}>
                    <li>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link to='/info'>Learn</Link>
                    </li>
                </ul>
                <div className={style.logo} onClick={navigateToHome}>
                    <img src={logopic} alt="logo" />
                </div>
                <div>
                <button onClick={openBurgerMenu} className={style.clearButton}>
                    <img src={ico} alt="ico"/>
                </button>
                </div>
                <Link to='/basketpage'><img src={basket} alt="basket"/></Link>
            </div>
        </header>
        </div>
    )
}