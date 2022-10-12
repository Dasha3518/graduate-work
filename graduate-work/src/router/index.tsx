import { Route, Routes } from "react-router-dom"
import { Main } from "../pages/Main"
//import { ReactNode, useContext } from "react";
import { Info } from "../pages/Info";
import { Shop } from "../pages/Shop";

export const RootRouter = () => {
    return (
        <>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />}/>
        <Route path="/shop" element={<Shop/>}/>
    </Routes>
    </>
    )
}