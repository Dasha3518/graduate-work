import { CommentAll } from "../../components/Comment/CommentAll";
import { DietJuice } from "../../components/Diet";
import { Enjoy } from "../../components/Enjoy";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Healthy } from "../../components/Healhty";
import { Olipop } from "../../components/Olipop";
import { Sample } from "../../components/Sample";

export const Info = () => {
    return (
        <>
            <Header/>
            <DietJuice />
            <Healthy/>
            <Sample/>
            <Olipop/>
            <Enjoy/>
            <CommentAll/>
            <Footer/>
        </>
    );
};