import { Product } from "../components/Products/products.slice";
import { Comment } from "../components/Comment/comment.slice";

const validateProduct = (product: Product): Promise<Product> => new Promise((resolve, reject) => setTimeout(() => {
    if(product.title.length === 0){
        reject('No title')
    }
    if(product.price <= 0){
        reject('Price is incorrect')
    }
    resolve(product)
}, 500))

export default validateProduct;

export const validateComment = (comment: Comment): Promise<Comment> => new Promise((resolve, reject) => setTimeout(() => {
    if(comment.username.length === 0){
        reject('No user')
    }
    if(comment.text.length === 0){
        reject('No text')
    }
    resolve(comment)
}, 500))