import { scienceReality } from "./science.js";


export function calcItemTotal(quantity, price) {
    const getTotal = price * quantity;
    return getTotal;
}
export function findById(scienceReality, id) {

    for (let tech of scienceReality) {
        if (tech.id === id) {
            return tech;
        }

    }

}


export function renderTableRow(yourCart) {
    const tr = document.createElement('tr');
    const itemsEl = document.createElement('th');
    const priceEl = document.createElement('th');
    const quantityEl = document.createElement('th');
    const totalEl = document.createElement('th');
    
    
    tr.classList.add('cHead');
    itemsEl.classList.add('cItem');
    priceEl.classList.add('cPrice');
    quantityEl.classList.add('cQuantity');
    totalEl.classList.add('cTotal');
   
   
    

    const tec = findById(scienceReality, yourCart.id);
    
    itemsEl.textContent = tec.name;
    priceEl.textContent = tec.price;
    quantityEl.textContent = yourCart.quantity;


    
    const total = calcItemTotal(yourCart.quantity, tec.price);
    
    totalEl.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    tr.append(itemsEl, priceEl, quantityEl, totalEl);

    return tr;

}

//Arguments of entireOrderTotal are simply placeholders.
export function entireOrderTotal(allProducts, cart){
    let accumulator = 0;

    for (let tec of cart) {
        const item = findById(allProducts, tec.id);
        const total = item.price * tec.quantity;

        accumulator = accumulator + total;
    }

    return accumulator.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}


