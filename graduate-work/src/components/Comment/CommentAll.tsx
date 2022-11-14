import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import style from  './style.module.css';

export const CommentAll = () => {
    return(
        <div className={style.comment}>
            <div className={style.container}> 
                <CommentList/>
                <CommentForm/>
            </div>
        </div>
    )
}