import { Header } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { Container } from "../../components/Container";

export const Login = () => {
    return(

            <>
                <Header/>
                    <div className={style.loginpage}>
                    <NavLink to={'/registration'}
                    className={({ isActive }) => (isActive ? style.active_link : style.normal)}>
                    Registration 
                </NavLink>
                <NavLink to={'/login'}
                    className={({ isActive }) => (isActive ? style.active_link : style.normal)}>
                    Login
                </NavLink>
                    </div>
                <LoginForm/>
            </>

    )
}