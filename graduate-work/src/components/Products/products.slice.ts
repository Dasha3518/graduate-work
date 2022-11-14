import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import validateProduct from '../../api/fake.api'
import { RootState } from '../../redux/store'
import { classiclime, gingerlemon, grepefruiftvanilla, orangecream, tropicalgrepefruit,
    vintagepineapple,  bottle1, card,bottle2,bottle3,bottle4} from '../../assets';

export interface Product{
    title: string,
    price: number,
    text: string,
    id: number,
    image:string
}

interface ProductsSliceState {
    products: Product[],
}

export const addProductAsync = createAsyncThunk ('products/addNewProduct', async (initialProduct: Product) => {
    const product = await validateProduct(initialProduct);
    return product;
})

const initialProducts: Product[] = [
    {
        image: bottle1,
        title: "The Samper", 
        text:"The world’s favorite flavors unite in one epic pack",
        price: 45,
        id: 1,
    },
    {
        image: bottle2,
        title: "The Samper",
        text: "Try them all in one delicious pack",
        price: 55,
        id: 2,
    },
    {
        image: bottle3,
        title: "Fruity Variety Pack",
        text: "Our most popular fruit flavors in one deliciously bright pack",
        price: 22,
        id: 3,
    },
    {
        image: bottle4,
        title: "Fruity Pops",
        text: "A sweet, sweet pack that will leave you tickled fruity",
        price: 22,
        id: 4,
    }, 
    {
            image: orangecream,
            title: "Orange Cream", 
            text:"Your favorite summertime treat, reimagined",
            price: 10,
            id: 6,
        },
        {
            image: tropicalgrepefruit,
            title: "Tropical  Grapefruit",
            text: "Like a vacation for your tastebuds",
            price: 15,
            id: 7,
        },
        {
            image: classiclime,
            title: "Classic Lime",
            text: "A modern take on the classic cream juice",
            price: 20,
            id: 8,
        },
        {
            image: gingerlemon,
            title: "Ginger Lemon",
            text: "A kick of ginger and a tang of lemon juice",
            price: 10,
            id: 9,
        },
        {
            image: vintagepineapple,
            title: "Vintage Pineapple",
            text: "Old-fashioned taste meets new-fashioned ingredients",
            price: 13,
            id: 10,
        },
        {
            image: grepefruiftvanilla,
            title: "Grapefruift Vanilla",
            text: "Like grapefruift pie in a can",
            price: 18,
            id:11,
        },
        {
            image: card,
            title: "Gift Card",
            text: "",
            price: 12,
            id: 5,
        }
    ]

const initialState: ProductsSliceState = {
    products: initialProducts,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },

        removeProduct: (state, action: PayloadAction<number>) => ({
            ...state,
            products: state.products.filter(product => product.id !== action.payload)  
        })       
    }
})
export const {addProduct, removeProduct} = productsSlice.actions;

export const getProductsSelector = (state: RootState) => state.products.products;


export default productsSlice.reducer;