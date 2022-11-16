import { Navigate, Route, Routes } from "react-router-dom"
import { Main } from "../pages/Main"
import { Info } from "../pages/Info";
import { Shop } from "../pages/Shop";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import { RegistrationSuccess } from "../pages/RegistrationSuccess";
import { Activation } from "../pages/Activation";
import { CartPage } from "../pages/CartPage/CartPage";
import { ReactNode, useContext } from "react";
import { Context } from "../App";
import { ResetPassword } from "../pages/ResetPassword";
import { ConfirmPassword } from "../pages/ConfirmPassword";
import { Title } from "../components/Title";


export const RootRouter = () => {
    return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/login" element={useLogin(<Login/>)}/>
        <Route path="/registration" element={useLogin(<Registration/>)}/>
        <Route path="/cartpage" element={useLoginGuard(<CartPage/>)}/>
        <Route path="/registrationsuccess" element={<RegistrationSuccess/>}/>
        <Route path="/activate/:uid/:token" element={<Activation/>}/>
        <Route path="*" element={<Title text="404"/>} />
        <Route path="/reset_password" element={<ResetPassword/>}/>
        <Route path="/password/reset/confirm/:uid/:token" element={<ConfirmPassword />}/>
    </Routes>
    )
}
const useLoginGuard = (component: ReactNode) => {
    const { user } = useContext(Context);

    if (user) {
        return component;
    } else {
        return <Navigate to="/login" />;
    }
};
const useLogin = (component: ReactNode) => {
    const { user } = useContext(Context);

    if (user) {
        return <Navigate to="/"/>;
    } else {
        return component
    }
};