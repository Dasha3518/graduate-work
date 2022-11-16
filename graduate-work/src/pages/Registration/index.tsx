import { RegistrationForm } from "../../components/RegistrationForm";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { Header } from "../../components/Header";

export const Registration = () => {
    return(
        <>
        <Header/>
        <div className={style.loginpage}>
            <div className={style.registrationTtitle}>
                <NavLink to={'/registration'}
                className={({ isActive }) => (isActive ? style.active_link : style.normal)}>
                    Registration 
                </NavLink>
                <span>|</span>
                <NavLink to={'/login'}
                className={({ isActive }) => (isActive ? style.active_link : style.normal)}>
                    Login
                </NavLink>
            </div>
            <RegistrationForm/>
        </div>
        </>
    )
};