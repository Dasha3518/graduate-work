import style from  './style.module.css';
import { Input } from "../Input"
import {  useState, useContext, ChangeEventHandler, FormEventHandler} from "react";
import { Button } from '../Button';
import { getUser, login } from '../../api/auth';
import { Context } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/validation';

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");


    const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailBlur = () => {
        const error = validateEmail(email);
        setEmailError(error);
    };
    
    const handleEmailFocus = () => {
        setEmailError("");
    };
    
    const handlePasswordlBlur = () => {
        const error = validatePassword(password);
        setPasswordError(error);
    };
    
    const handlePasswordlFocus = () => {
        setPasswordError("");
    };

    const navigate = useNavigate();
    const { setUser } = useContext(Context);
    
        const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const formData = new FormData(event?.target as any);
        const obj = Object.fromEntries(Array.from(formData.entries()));
        const email: string = obj.email as string;
        const password: string = obj.password as string;
    
        let isOk = true;
        login(email, password)
            .then((response) => {
            if (response.ok) {
                isOk = true;
            } else {
                isOk = false;
            }
    
            return response.json();
            })
                .then((json) => {
                    if (isOk) {
                    localStorage.setItem("access", json.access);
                    localStorage.setItem("refresh", json.refresh);

                    localStorage.setItem("username" , json.account);
                    getUser()
                    .then((response) => {
                        return response.json();
                    })
                    .then((user) => {
                        setUser(user);
                        navigate("/");
                    });
                    } else {
                        if (
                            json?.detail?.includes(
                                "No active account found with the given credentials"
                            )
                        ) {
                            setError(
                                "No active account found with the given credentials"
                                );
                            return;
                        }
                    }
                });
            }
    return (
        <form className={style.back} onSubmit={handleSubmit}>
            <div className={style.container}>
                <div className={style.registrationBlog}>
                        <div className={style.inputBlog}>
                            <p className={style.inputText}>Email</p>
                            <Input 
                            type='form' 
                            required={true} 
                            name="email"
                            placeholder="Email"
                            onChange={handleEmail}
                            onBlur={handleEmailBlur}
                            onFocus={handleEmailFocus}
                            error={emailError}/>
                        </div>
                        <div className={style.inputBlog}>
                            <p className={style.inputText}>Password</p>
                            <Input  name="password"
                                required={true}
                                minLength={4}   
                                maxLength={20}
                                type='password'
                                value={password}
                                placeholder="Password"
                                onChange={handlePassword}
                                onBlur={handlePasswordlBlur}
                                onFocus={handlePasswordlFocus}
                                error={passwordError}
                            />
                        </div>
                        <Link to="/reset_password">I do not remember the password</Link>
                    <Button 
                        type="primary" 
                        text={"Сonfirm"}  
                        btnType="submit" 
                        onClick={() => {}}/>
                </div>
                <p className={style.textErrorForm}>{error}</p>
            </div>
        </form>
    )
    console.log()
};
