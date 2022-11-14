    import { ChangeEventHandler, useState } from "react";
    import { resetPassword } from "../../api/auth";
    import { Header } from "../../components/Header";
    import { Input } from "../../components/Input";
    import { NotificationManager } from "react-notifications";
import { InfoTemplate } from "../../components/InfoTemplate";


    export const ResetPassword = () => {
    const [email, setEmail] = useState("");

    const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);
    };

    const sendEmail = () => {
        resetPassword(email).then((response) => {
        if (response.ok) {
            NotificationManager.info(
            "A password change message has been sent to your email"
            );

            setEmail("");
        }
        });
    };

    return (
        <>
            <Header />
            <InfoTemplate
            title="Reset Password"
            textBtn="Send email"
            onClick={sendEmail}>
                <Input value={email} onChange={handleEmail} type={"form"} />
            </InfoTemplate>
        </>
    );
    };
