import {useState } from 'react'
import { icocomment } from '../../assets';
import { useAppDispatch } from '../../redux/store.hooks';
import { Button } from '../Button';
import { Input } from '../Input';
import {  addCommentAsync, generateUniqId,} from './comment.slice';
import { Comment } from './comment.slice';
import style from  './style.module.css';


export const CommentForm = () => {
    const dispatch = useAppDispatch()

    const [comment, setComment] = useState<Comment>({
        id: '', 
        text: '',
        username: '',
        image: icocomment
    })

const handleChange = ({target:{name, value}}: React.ChangeEvent<HTMLInputElement>) => setComment(prev =>{
        const newValue = {...prev};
        (newValue as any)[name] = value;
        return newValue;
    })
    const handleChangeText = ({target:{name, value}}: React.ChangeEvent<HTMLTextAreaElement>) => setComment(prev =>{
        const newValue = {...prev};
        (newValue as any)[name] = value;
        return newValue;
    })
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        comment.id = generateUniqId ()
        
        localStorage.setItem(`comment ${comment.id}`,JSON.stringify({comment}))
        dispatch(addCommentAsync(comment))
        console.log(comment)
        setComment({
        id: '', 
        text: '',
        username: '',
        image: icocomment})
    }

    const { text, username} = comment;

    return (
        <div className={style.inputform}>
        <form  autoComplete='off' >
            <Input 
                type="comment" 
                placeholder='user' 
                name='username' 
                value = {username} 
                onChange = {handleChange}
            />

            <textarea 
                name="text" 
                value = {text} 
                onChange={handleChangeText}
            />
            <Button  btnType="submit"  text='Add a Comment' type='primary' onClick={handleSubmit}/>
        </form>
    </div>);
}


