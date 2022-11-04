import style from  './style.module.css';
import { Input } from "../Input"
import {  useState, useContext, ChangeEventHandler } from "react";
import { Button } from '../Button';
import { getUser, login } from '../../api/auth';
import { Context } from '../../App';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/validation';

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const {setUser } = useContext(Context);
    
    const navigate = useNavigate();

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
    const onClickLogin = () => {
        setError("");
        const errors = {
        email: validateEmail(email),
        password: validatePassword(password),
    };
        
    setEmailError(errors.email);
    setPasswordError(errors.password);
        
    const isValidForm = Object.values(errors).every((error) => error === "");
        
        if (isValidForm) {
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
                                "Активная учетная запись с указанными учетными данными не найдена"
                            );
                            return;
                        }
                    }
                });
            }
        };

    return (
        <form className={style.back}>
            <div className={style.container}>
                <div className={style.registrationBlog}>
                        <div className={style.inputBlog}>
                            <p className={style.inputText}>Email</p>
                            <Input 
                            type='form' 
                            required={true} 
                            value={email}
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
                                type='form' 
                                value={password}
                                placeholder="Password"
                                onChange={handlePassword}
                                onBlur={handlePasswordlBlur}
                                onFocus={handlePasswordlFocus}
                                error={passwordError}
                            />
                        </div>
                    <Button 
                        type="primary" 
                        onClick={onClickLogin} 
                        text={"Сonfirm"}  
                        btnType="submit" />
                </div>
                <p className={style.textErrorForm}>{error}</p>
            </div>
        </form>
    )
};