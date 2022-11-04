import { AnyAction, Reducer } from "redux";
import { ACTIONS } from "../constants";


export interface IBasketProducts {
    selectedProducts: IBasketProducts[];
}

const defaultState: IBasketProducts  = {
    selectedProducts: [],
}



export const basketReducer = (state = defaultState, action: AnyAction) =>{
    switch (action.type) {
        case ACTIONS.SELECTED_PRODUCTS:
            const products = action.products;
            const NewSelectedProducts = state.selectedProducts.concat([products]);

            return{
                selectedProducts: NewSelectedProducts,
            }
        default:
        return state;
    }
};