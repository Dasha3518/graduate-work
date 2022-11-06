import { Route, Routes } from "react-router-dom"
import { Main } from "../pages/Main"
//import { ReactNode, useContext } from "react";
import { Info } from "../pages/Info";
import { Shop } from "../pages/Shop";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import { BasketPage } from "../pages/BasketPage";
import { RegistrationSuccess } from "../pages/RegistrationSuccess";
import { Activation } from "../pages/Activation";

export const RootRouter = () => {
    return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/basketpage" element={<BasketPage/>}/>
        <Route path="/registrationsuccess" element={<RegistrationSuccess/>}/>
        <Route path="//activate/:uid/:token" element={<Activation/>}/>
    </Routes>
    )
}