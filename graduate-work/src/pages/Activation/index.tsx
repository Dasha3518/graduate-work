import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { activateUser } from "../../api/auth";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const Activation = () => {
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.uid && params.token) {
        activateUser(params.uid, params.token);
        }
    }, []);

    return (
        <>
            <Header />
            <InfoTemplate
                title={"Activation was successful"}
                textBtn="Login"
                onClick={() => {
                navigate("/login");
                }}
            >
                You can log into your account
            </InfoTemplate>
        </>
    );
};