
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";
import style from './style.module.css'


export const RegistrationSuccess = () => {
    const navigate = useNavigate();
    
    const navigateToHome = () => {
        navigate("/");
    };

return (
    <Container>
        <Header/>
        <InfoTemplate
            title="Registration confirmation"
            textBtn="Home"
            onClick={navigateToHome}
        >
        Please activate your account with the activation link in the email{" "}
        <a href="#" className={style.mail} >user@gmail.com</a> Please, check your email
        </InfoTemplate>
    </Container>
    );
};
