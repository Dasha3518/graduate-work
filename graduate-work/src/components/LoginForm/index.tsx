import style from  './style.module.css';
import { Input } from "../Input"
import {  FormEventHandler, useState, useRef, useContext } from "react";
import { Button } from '../Button';
import { getUser, login } from '../../api/auth';
import { Context } from '../../App';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const refEmail: any = useRef(null);
    const refPassword: any = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const { setUser } = useContext(Context);
    
    const navigate = useNavigate();


    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const formData = new FormData(event?.target as any);
        const obj = Object.fromEntries(Array.from(formData.entries()));
        const email: string = obj.email as string;
        const password: string = obj.password as string;

        // let isOk = true;
        // login(email, password)
        // .then((response) => {
        //     if (response.ok) {
        //     isOk = true;
        //     } else {
        //     isOk = false;
        //     }

        //     return response.json();
        // })
        // .then((json) => {
        //     if (isOk) {
        //     localStorage.setItem("access", json.access);
        //     localStorage.setItem("refresh", json.refresh);

        //     getUser()
        //         .then((response) => {
        //         return response.json();
        //         })
        //         .then((user) => {
        //         setUser(user);
        //         navigate("/");
        //         });
        //     } else {
            
        //     }
        // });
    };
    return (
        <form className={style.back} onSubmit={handleSubmit}>
        <div className={style.container}>
            <div className={style.registrationBlog}>
                    <div className={style.inputBlog}>
                        <p className={style.inputText}>Email</p>
                        <Input 
                        type='form' 
                        name="email" 
                        required={true} 
                        refObj={refEmail}/>
                    </div>
                    <div className={style.inputBlog}>
                        <p className={style.inputText}>Password</p>
                        <Input  name="password"
                            required={true}
                            refObj={refPassword}
                            minLength={3}   
                            maxLength={40}
                            type='form' />
                    </div>
                <Button 
                    type="primary" 
                    onClick={() => {}} 
                    text={"Сonfirm"}  
                    btnType="submit" />
                </div>
        </div>
        </form>
    )
}