import { cart } from "./data-cart.js";
import { scienceReality } from "../science.js";
import { renderTableRow } from "../utils.js";
import { findById } from "../utils.js";
import { calcItemTotal } from "../utils.js";
import { entireOrderTotal } from "../utils.js";

//export function cartList(items) {
    //const myTr = document.getElementById('cHead');
    //const myItem = document.getElementById('cItem');
    //const myPrice = document.getElementById('cPrice');
    //const myQuantity = document.getElementById('cQuantity');
    //const myTotal = document.getElementById('cTotal');
    //const myButton = document.getElementById('cButton');
    
    const tbody = document.querySelector('tbody');

for (let tech of cart) {
    const tr = renderTableRow(tech);

    tbody.append(tr);
}

    const total = entireOrderTotal(scienceReality, cart);

    calcItemTotal.textContent = total;
    //myTr.append(myItem, myPrice, myQuantity, myTotal, myButton);
   // return myTr;
