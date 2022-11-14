import { RegistrationForm } from "../../components/RegistrationForm";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";

export const Registration = () => {
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
        <RegistrationForm/>
        </>
    )
}