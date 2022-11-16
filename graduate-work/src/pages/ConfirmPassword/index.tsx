import { ChangeEventHandler, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { confirmPassword } from "../../api/auth";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NotificationManager } from "react-notifications";
import { InfoTemplate } from "../../components/InfoTemplate";
import { validatePassword } from "../../utils/validation";

    export const ConfirmPassword = () => {
    const [password, setPassword] = useState("");
    const { uid, token } = useParams<{ uid: string; token: string }>();
    const [passwordError, setPasswordError] = useState("");
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
    const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    };
    
    const handlePasswordlBlur = () => {
        const error = validatePassword(password);
        setPasswordError(error);
    };
    
    const handlePasswordlFocus = () => {
        setPasswordError("");
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
                    type={"password"}   
                    placeholder="Password" 
                    onChange={handlePassword}
                    onBlur={handlePasswordlBlur}
                    onFocus={handlePasswordlFocus}  
                    error={passwordError}         
                />
            </InfoTemplate>
        </>
        );
    };