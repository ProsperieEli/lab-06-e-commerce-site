import { scienceReality } from "./science.js";


export function techno(technology) {
    const myLi = document.createElement('li');
    const myButton = document.createElement('button');
    const myImage = document.createElement('img');
    const myHeader = document.createElement('h3');
    const myDiv = document.createElement('div');
    const myParagraph = document.createElement('p');


    myLi.classList.add('tech');
    myButton.classList.add('button');
    myImage.classList.add('img');
    myHeader.classList.add('header');
    myDiv.classList.add('Information');
    myParagraph.classList.add('price');

    myImage.src = `../assets/${technology.image}`;
    myHeader.textContent = technology.name;
    myDiv.textContent = `${technology.description}`;
    myParagraph.textContent = `$${technology.price}`;
    myButton.textContent = 'Add';
    



    myLi.append(myButton, myImage, myHeader, myDiv, myParagraph);
    return myLi;
}

