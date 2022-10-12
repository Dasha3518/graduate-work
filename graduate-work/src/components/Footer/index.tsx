
import { Input } from '../Input';
import style from  './style.module.css';
import { ChangeEventHandler, useState } from 'react'
import { Button } from '../Button';
import { profile } from '../../assets';

export const Footer = () => {
    const[text, setText] = useState('');

    const submit = () => {
        };

    const handleOnChange: ChangeEventHandler<HTMLInputElement>= (event) => {
        setText(event.target.value);
    }

    return(
        <footer  className={style.footer}>
            <div className={style.container}>
                <div className={style.footerContent}>
                    <div className={style.footerList}>
                        <ul  className={style.footerListMenu}>
                            <li>
                                <a href="">SHOP</a>
                            </li>
                            <li>
                                <a href="">Drinks</a>
                            </li>
                            <li>
                                <a href="">Gift Cards</a>
                            </li>
                            <li>
                                <a href="">Store</a>
                            </li>
                        </ul>
                        <ul className={style.footerListMenu}>
                            <li>
                                <a href="">HELP</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                            <li>
                                <a href="">Accessibility</a>
                            </li>
                        </ul>
                        <ul className={style.footerListMenu}>
                            <li>
                                <a href="">ABOUT</a>
                            </li>
                            <li>
                                <a href="">Our Story</a>
                            </li>
                            <li>
                                <a href="">Ingredients</a>
                            </li>
                            <li>
                                <a href="">Press</a>
                            </li>
                            <li>
                                <a href="">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={style.sale}>Sign up to get 10% off your first order</h4>
                        <Input onChange={handleOnChange} value={text} type='footerinput' placeholder='Email Address'/>
                        <Button type="footerbutton" onClick={submit} text={"Subscribe"}/>
                        <img src={profile} alt="" className={style.profile}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}