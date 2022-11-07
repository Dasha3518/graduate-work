import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../components/Header";
import { Mainpage } from "../../components/Mainpage";

export const Main = () => {
    return (
        <>
        <Header />            
        <Mainpage/>
        </>
    );    
};