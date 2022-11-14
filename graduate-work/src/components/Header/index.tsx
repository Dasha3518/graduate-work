import { Link, useNavigate } from 'react-router-dom';
import { basket, ico, logopic } from '../../assets';
import style from  './style.module.css';
import { NavBar } from '../NavBar';
import { useContext, useState } from "react";
import { useAppSelector } from '../../redux/store.hooks';
import { getTotal } from '../Cart/cart.slice';
import { Context } from '../../App';

export const Header = () => {
    const totalAmout = useAppSelector(getTotal)
    const [burgerMenu, setBurgerMenu] = useState(false);
    const { user, setUser } = useContext(Context);

    const openBurgerMenu = () => {
        setBurgerMenu(!burgerMenu)
    };
    const closeBurgerMenu = () => {
        setBurgerMenu(false);
    };
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/")
    }



    return(
        <>
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
                    {user ?(
                        <Link to='/cartpage' ><img src={basket} alt="basket"/><div className={style.total}>{totalAmout > 0 ? totalAmout: null} </div></Link>
                    ) : null}
                    {user ? <h2>{user?.username}</h2> : null}
                    <div>
                    <button onClick={openBurgerMenu} className={style.clearButton}>
                        <img src={ico} alt="ico"/>
                    </button>
                    </div>
                </div>
            </header>
        </>
    )
}