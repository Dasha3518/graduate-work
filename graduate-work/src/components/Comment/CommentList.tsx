import { useSelector } from 'react-redux';
import style from  './style.module.css';
import { getCommentSelector } from './comment.slice';

export const CommentList = () => {

    const comments = useSelector(getCommentSelector)
    
    return (
        <>
            <div className={style.comments}>
                {comments.map(comment => <div key={comment.id} className={style.commentList}>
                        <img src={`${comment.image}`} alt="" />
                        <li className={style.username}>{`${comment.username}`}</li>
                    <li className={style.text}>{`${comment.text}`}</li>
                </div>)}
            </div>
        </>
    );
}
