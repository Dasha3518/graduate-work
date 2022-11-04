import style from  './style.module.css';
import { Input } from "../Input"
import { ChangeEventHandler, useState } from "react";
import { Button } from '../Button';
import { validateConfirmPassword, validateEmail, validatePassword, validateRequired } from '../../utils/validation';
import { registerUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm = () => {
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const navigate = useNavigate();
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

    const handleEmailBlur = () => {
        const error = validateEmail(email);
        setEmailError(error);
    };

    const handleEmailFocus = () => {
        setEmailError('')
    };

    const handleUserNamelBlur = () => {
        const error = validateRequired(userName);
        setUserNameError(error);
    };

    const handleUserNamelFocus = () => {
        setUserNameError("");
    };

    const handlePasswordlBlur = () => {
        const error = validatePassword(password);
        setPasswordError(error);
    };

    const handlePasswordlFocus = () => {
        setPasswordError("");
    };

    const handleConfirmlBlur = () => {
        const error = validateConfirmPassword(confirmPassword, password);
        setConfirmPasswordError(error);
    };

    const handleConfirmlFocus = () => {
        setConfirmPasswordError("");
    };

        
    const onClickRegistration = () => {
        setError("");

        const errors = {
            user: validateRequired(userName),
            email: validateEmail(email),
            password: validateRequired(password),
            confirm: validateConfirmPassword(password, confirmPassword)
        };

        const isValidForm = Object.values(errors).every((error) => error === '' );

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
                navigate("/registrationsuccess");
            } else {
                if (json?.email?.includes("user with this Email already exists.")) {
                setError("User with this email already exists");
                return;
                }
                if (
                json?.username?.includes(
                    "A user with that username already exists."
                )
                ) {
                setError("A user with this username already exists");
                return;
                }
                if (
                    json?.password?.includes(
                        "This password is too short. It must contain at least 6 characters."
                        )
                ) {
                    setError(
                    "Password must contain at least 6 characters"
                    );
                    return;
                }
                if (json?.password?.includes("This password is too simple, change it")) {
                    setError("This password is too simple, change it");
                    return;
                }
            }
        });
    }
    };


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
                            error={userNameError}
                            placeholder="User Name"
                            onBlur={handleUserNamelBlur}
                            onFocus={handleUserNamelFocus} />
                    </div>
                    <div className={style.inputBlog}>
                        <p className={style.inputText}>Email</p>
                        <Input 
                            value={email} 
                            onChange={handleEmail} 
                            type='form' 
                            placeholder='Email'
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
                            placeholder="Password"
                            onBlur={handlePasswordlBlur}
                            onFocus={handlePasswordlFocus}
                            error={passwordError}/>
                    </div>
                    <div className={style.inputBlog}>
                        <p className={style.inputText}>Confirm Password</p>
                        <Input 
                            value={confirmPassword} 
                            onChange={handleConfirmPassword} 
                            type='form'
                            placeholder="Confirm Password"
                            error={confirmPasswordError}
                            onBlur={handleConfirmlBlur}
                            onFocus={handleConfirmlFocus}/>
                    </div>
                <Button 
                    type="primary" 
                    onClick={onClickRegistration} 
                    text={"Registration"} />
                </div>
        </div>
        </div>
    )
}