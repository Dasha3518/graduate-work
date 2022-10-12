import style from  './style.module.css';
import { Input } from "../Input"
import { ChangeEventHandler, useState } from "react";
import { Button } from '../Button';

export const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    };
    const submit = () => {
        alert(email + " " + password);
        };
    return (
        <div className={style.back}>
        <div className={style.container}>
            <div className={style.registrationBlog}>
                    <div className={style.inputBlog}>
                        <p className={style.inputText}>Email</p>
                        <Input value={email} onChange={handleEmail} type='form' />
                    </div>
                    <div className={style.inputBlog}>
                        <p className={style.inputText}>Password</p>
                        <Input value={password} onChange={handlePassword} type='form'/>
                    </div>
                <Button type="primary" onClick={submit} text={"Сonfirm"} />
                </div>
        </div>
        </div>
    )
}