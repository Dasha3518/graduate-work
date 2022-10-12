import { Route, Routes } from "react-router-dom"
import { Main } from "../pages/Main"
//import { ReactNode, useContext } from "react";
import { Information } from "../pages/Information";

export const RootRouter = () => {
    return (
        <>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/information " element={<Information />}></Route>
    </Routes>
    </>
    )
}