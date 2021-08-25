import { findById } from "./utils.js";

const CART = 'CART';

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (!stringyCart){
        return [];
    } else {
        const finalCart = JSON.parse(stringyCart);
        return finalCart;
    }
}

export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem('CART', stringyCart);
}

export function addItemToCart(item) {
    const cart = getCart();
    const cartProduct = findById(cart, item);

    if (cartProduct){
        cartProduct.quantity++;
    } else {
        const newProduct = { id: item, quantity: 1 };
        cart.push(newProduct);
    }
    setCart(cart);

}

export function clear() {
    const cart = getCart();
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);

    localStorage.removeItem(CART);

 window.location = '/index.html';
}



