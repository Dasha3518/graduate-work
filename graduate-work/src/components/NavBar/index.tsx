import { Link, useNavigate } from 'react-router-dom';
import style from './style.module.css';
import { cross, logopic, logoutpic} from '../../assets';
import { useContext } from 'react';
import { Context } from '../../App';
import { Button } from '../Button';


interface IProps {
    onClose?: () => void;
}

export const NavBar = ({ onClose }: IProps)  => {
    const {user, setUser } = useContext(Context);
    const navigate = useNavigate();
    

    const logout = () => {
        navigate("/");
        setUser(null);
    
        localStorage.clear();
    };
    return(
        <div className={style.navbar}>
            <div className={style.container}>
                <div className={style.cont}>
                    <div className={style.menu}>
                    {user ? <button onClick={logout} className={style.buttonLogout}>
                    <img src={logoutpic} alt="" />
                </button> : null}
                        <img src={logopic} alt=""  className={style.logo}/>
                        <button  className={style.close} onClick={onClose}>
                            <img src={cross} alt="" />
                        </button>
                    </div>
                    <ul>
                    {user ? (
                        <>
                            <li>
                            <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                            <Link to="/info">Information</Link>
                            </li>
                            <li>
                            <Link to="/cartpage">Cart</Link>
                            </li>
                            <li>
                                <Link to="/myorderpage">My orders</Link>
                            </li>
                        </>
                        ) : (
                        <>
                            <li>
                            <Link to="/login">Login</Link>
                            </li>
                            <li>
                            <Link to="/registration">Registration</Link>
                            </li>
                        </>
                        )}
                    </ul>
                </div>
                <div className={style.logout}>

                </div>
            </div>
        </div>
    )
};
