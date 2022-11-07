import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Olipop } from "../../components/Olipop"
import ProductsList from "../../components/Products/ProductsList"


export const Shop= () => {
    return(
    <>
        <Header/>
        <ProductsList/>
        <Olipop/>
        <Footer/>
    </>
    )
}