import { cart } from "./data.js";
import { scienceReality } from "../science.js";

function cartList(items) {
    const myTr = document.getElementById('cHead');
    const myItem = document.getElementById('cItem');
    const myPrice = document.getElementById('cPrice');
    const myQuantity = document.getElementById('cQuantity');
    const myTotal = document.getElementById('cTotal');
    const myButton = document.getElementById('cButton');


    myTr.append(myItem, myPrice, myQuantity, myTotal, myButton);
    return myTr;
}