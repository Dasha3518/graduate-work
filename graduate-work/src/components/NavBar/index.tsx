import { Link } from 'react-router-dom';
import style from './style.module.css';
import { cross, logopic} from '../../assets';


interface IProps {
    onClose?: () => void;
}

export const NavBar = ({ onClose }: IProps)  => {

    return(
        <div className={style.navbar}>
            <div className={style.container}>
                    <div className={style.menu}>
                        <img src={logopic} alt=""  className={style.logo}/>
                        <button  className={style.close} onClick={onClose}>
                            <img src={cross} alt="" />
                        </button>
                    </div>
                    <ul>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/registration'>Registration</Link>
                        </li>
                    </ul>
            </div>
        </div>
    )
}