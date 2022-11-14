import {configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import products from '../components/Products/products.slice';
import cart from '../components/Cart/cart.slice';
import comments from '../components/Comment//comment.slice';

const store = configureStore({
    reducer: {
        products,
        cart,
        comments
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()


export default store;