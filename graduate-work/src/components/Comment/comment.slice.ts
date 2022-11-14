import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { validateComment } from '../../api/fake.api';
import { icocomment } from '../../assets';
import { RootState } from '../../redux/store';
// import { RootState } from '../../store'

export const generateUniqId = () => {
    return '_' + Math.random().toString(16).slice(2)
}

export interface Comment{
    username: string,
    text: string,
    id: string,
    image: string
}

export enum ValidationState{
    FullFulled,
    Pending,
    Rejected
}

interface CommentSliceState {
    comments: Comment[],
    validationState?: ValidationState,
    errorMessage?: string
}

export const addCommentAsync = createAsyncThunk ('comments/addNewComments', async (initialComment: Comment) => {
    const comment = await validateComment(initialComment);
    return comment;
})

const initialComment: Comment[] = [
    {
        username: 'Alex',
        text:'Большой выбор соков, очень помогает в жару, а зимой помогоет восполнить баланс витаминов!', 
        id:generateUniqId(), 
        image: icocomment
    },
    {
        username: 'Darya', 
        text:'Вкус в целом приятный с небольшой горчинкой (по сравнению с Rich, например)', 
        id:generateUniqId(), 
        image: icocomment
    },
    {username: 'Dima', 
    text:'Натуральные соки и нектары изготавливаются из концентрированных соков исключительно натурального происхождения и высокого качества без применения искусственных ароматизаторов, красителей и консервантов. ',
    id:generateUniqId(), 
    image: icocomment
    },
    {
        username: 'Masha', 
        text:'Возможно выпадение естественного осадка, похож на свежевыжатый.', 
        id:generateUniqId(), 
        image: icocomment
    }
]

const initialState: CommentSliceState = {
    comments: initialComment,
    validationState: undefined,
    errorMessage: undefined
}

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers:{
        addComment: (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload)
        },

        // removeComment: (state, action: PayloadAction<number>) => ({
        //     ...state,
        //     comments: state.comments.filter(comment => comment.id !== action.payload)  
        // })       
    },
    extraReducers: builder => {
        builder.addCase(addCommentAsync.fulfilled, (state, action) => ({
            ...state,
            validationState: ValidationState.FullFulled,
            errorMessage: undefined,
            comments: [...state.comments, action.payload]
        }))
        builder.addCase(addCommentAsync.rejected, (state, action) => ({
            ...state,
            validationState: ValidationState.Rejected,
            errorMessage: action.error.message           
        }))
        builder.addCase(addCommentAsync.pending, (state, action) => ({
            ...state,
            validationState: ValidationState.Pending,
            errorMessage: undefined
        }))
    }
})
//export const {addComment, removeComment} = commentSlice.actions;
export const {addComment} = commentSlice.actions;

export const getCommentSelector = (state: RootState) => state.comments.comments;
// export const getErrorMessage = (state: RootState) => state.comments.errorMessage;

export default commentSlice.reducer;