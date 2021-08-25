import { cart } from "./data-cart.js";
import { scienceReality } from "../science.js";
import { renderTableRow } from "../utils.js";
import { entireOrderTotal } from "../utils.js";
import { getCart, clear } from "../interactive-io.js";


    
const th = document.querySelector('tbody');

for (let tech of cart) {
    const tr = renderTableRow(tech);

    th.append(tr);
}

const total = entireOrderTotal(scienceReality, cart);




const td = document.querySelector('#final');
//Arguments of entireOrderTotal are the real passing arguments

td.textContent = total;


 