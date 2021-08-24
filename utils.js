import { scienceReality } from "./science.js";

export function findById(scienceReality ,id) {

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
   
    console.log(yourCart);

    const tec = findById(scienceReality, yourCart.id);

    tr.textContent = tec.name;
    priceEl.textContent = tec.price;
    quantityEl.textContent = yourCart.quantity;

    const total = fullAmount(tec.price, yourCart.quantity);

    totalcPrice.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.append(itemsEl, priceEl, quantityEl, totalEl);

    return tr;

}

export function calcItemTotal(quantity, price) {
    const getTotal = price * quantity;
    return getTotal;
}

export function entireOrderTotal(allProducts, cart){
    let accumulator = 0;

    for (let tec of cart) {
        const item = findById(allProducts, item.id);
        const total = item.price * item.quantity;

        accumulator = accumulator + total;
    }

    return accumulator.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}


