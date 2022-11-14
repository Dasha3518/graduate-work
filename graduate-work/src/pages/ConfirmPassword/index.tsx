import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { confirmPassword } from "../../api/auth";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NotificationManager } from "react-notifications";
import { InfoTemplate } from "../../components/InfoTemplate";

    export const ConfirmPassword = () => {
    const [password, setPassword] = useState("");
    const { uid, token } = useParams<{ uid: string; token: string }>();
    const navigate = useNavigate();

    const handleConfirmPassword = () => {
        if (uid && token && password) {
        confirmPassword(uid, token, password).then((response) => {
            if (response.ok) {
            navigate("/login");
            } else {
            NotificationManager.error("try again");
            }
        });
        }
    };

    return (
        <>
            <Header/>
            <InfoTemplate
                title="Create a new password"
                textBtn="Confirm"
                onClick={handleConfirmPassword}
            >
                <Input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} 
                    type={"password"}               
                />
            </InfoTemplate>
        </>
        );
    };