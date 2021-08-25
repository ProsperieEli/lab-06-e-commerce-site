import { cart } from "./data-cart.js";
import { scienceReality } from "../science.js";
import { renderTableRow } from "../utils.js";
import { entireOrderTotal } from "../utils.js";

// export function cartList(items) {
//     const myTr = document.getElementById('cHead');
//     const myItem = document.getElementById('cItem');
//     const myPrice = document.getElementById('cPrice');
//     const myQuantity = document.getElementById('cQuantity');
//     const myTotal = document.getElementById('cTotal');
//     const myButton = document.getElementById('cButton');
    
const th = document.querySelector('tbody');

for (let tech of cart) {
    const tr = renderTableRow(tech);

    th.append(tr);
}

const total = entireOrderTotal(scienceReality, cart);


//Include injection space here--

const td = document.querySelector('#final');
//Arguments of entireOrderTotal are the real passing arguments

td.textContent = total;
// calcItemTotal.textContent = total;

 