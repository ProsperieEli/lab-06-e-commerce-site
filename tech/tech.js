import { scienceReality } from "../science.js";
import { techno } from "../product-utils.js";

const ulEl = document.getElementById('myUl');

for (let technology of scienceReality) {
    const myLi = techno(technology);
    ulEl.append(myLi);
    
}