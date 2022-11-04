import style from  './style.module.css';
import { Input } from "../Input"
import { ChangeEventHandler, useState } from "react";
import { Button } from '../Button';
import { validateConfirmPassword, validateEmail, validateRequired } from '../../utils/validation';
import { registerUser } from '../../api/auth';

export const RegistrationForm = () => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [error, setError] = useState('');

    const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
        const error = validateEmail(event.target.value);
        if (error) {
            setEmailError(error);
        } else {
            setEmailError("");
        }
    
        setEmail(event.target.value);
    };
    
    const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
        const error = validateConfirmPassword(event.target.value, password);
    
        if (error) {
            setConfirmPasswordError(error);
        } else {
            setConfirmPasswordError("");
        }
    
        setConfirmPassword(event.target.value);
        };

    const handleUserName: ChangeEventHandler<HTMLInputElement> = (event) => {
        const error = validateRequired(event.target.value);
        if(error) {
            setUserNameError(error);
        } else {
            setUserNameError('')
        }
    
        setUserName(event.target.value);
    };
        
    const onClickLogin = () => {
        setError("");

        const errors = {
            user: validateRequired(userName),
            email: validateEmail(email),
            password: validateRequired(password),
            confirm: validateConfirmPassword(password, confirmPassword)
        };

        const isValifForm = Object.values(errors).every((error) => error === '' );

        if(isValifForm){

        }
        setUserNameError(errors.user);
        setEmailError(errors.email);
        setPasswordError(errors.password);
        setConfirmPasswordError(errors.confirm);
        
    const isValidForm = Object.values(errors).every((error) => error === "");

        if (isValidForm) {
        const promise = registerUser(userName, email, password);
        let isOk = true;

        promise
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
                // navigate("/register-success");
            } else {
                if (json?.email?.includes("user with this Email already exists.")) {
                setError("Пользователь с таким email уже существует");
                return;
                }
                if (
                json?.username?.includes(
                    "A user with that username already exists."
                )
                ) {
                setError("Пользователь с таким username уже существует");
                return;
                }

            //обработка пороля
            // "This password is too short. It must contain at least 8 characters."
            // "This password is too common."
            // "This password is entirely numeric."
            }
        });
    }
    };
        const handleEmailBlur = () => {
            const error = validateEmail(email);

            setEmailError(error);
        }

        const handleEmailFocus = () => {
            setEmailError('')
        }

    return (
        <div className={style.back}>
        <div className={style.container}>
            <div className={style.registrationBlog}>
                    <div className={style.inputBlog}>
                        <p className={style.inputText}>Username</p>
                        <Input 
                            value={userName} 
                            onChange={handleUserName} 
                            type='form'
                            error={userNameError} />
                    </div>
                    <div className={style.inputBlog}>
                        <p className={style.inputText}>Email</p>
                        <Input 
                            value={email} 
                            onChange={handleEmail} 
                            type='form' 
                            onBlur={handleEmailBlur}
                            onFocus={handleEmailFocus}
                            error={emailError}/>
                    </div>
                    <div className={style.inputBlog}>
                        <p className={style.inputText}>Password</p>
                        <Input 
                            value={password} 
                            onChange={handlePassword} 
                            type='form'
                            error={passwordError}/>
                    </div>
                    <div className={style.inputBlog}>
                        <p className={style.inputText}>Confirm Password</p>
                        <Input 
                            value={confirmPassword} 
                            onChange={handleConfirmPassword} 
                            type='form'
                            error={confirmPasswordError}/>
                    </div>
                <Button 
                    type="primary" 
                    onClick={onClickLogin} 
                    text={"Сonfirm"} />
                </div>
        </div>
        </div>
    )
}