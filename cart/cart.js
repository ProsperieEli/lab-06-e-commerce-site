import { cart } from "./data-cart.js";
import { scienceReality } from "../science.js";
import { renderTableRow } from "../utils.js";
import { entireOrderTotal } from "../utils.js";
import { getCart, clear } from "../interactive-io.js";
import { techno } from "../product-utils.js";

const myCart = getCart();
    
const th = document.querySelector('tbody');

const button = document.getElementById('cButton');
const td = document.querySelector('#final'); 


for (let tech of myCart) {
    const tr = renderTableRow(tech);

    th.append(tr);
}

const total = entireOrderTotal(scienceReality, myCart);





//Arguments of entireOrderTotal are the real passing arguments

td.textContent = total;

button.addEventListener('click', () => {
    clear();
});



 