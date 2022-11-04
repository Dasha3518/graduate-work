import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Olipop } from "../../components/Olipop"
import { PacksShop } from "../../components/Packsshop"
import { Single } from "../../components/Single"

export const Shop= () => {
    return(
    <>
        <Header/>
        <PacksShop/>
        <Single/>
        <Olipop/>
        <Footer/>
    </>
    )
}