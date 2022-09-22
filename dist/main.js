const tile = document.querySelector('.number');
const gameboad = document.querySelectorAll('.tile');
// type basePosition = {
//     top: number;
//     left: number;
// }
let topP = 0;
let leftP = 0;
const newNumbers = {};
const createNewNumber = () => {
    const newNumber = document.createElement('div');
    newNumber.classList.add('number');
    newNumber.textContent = '2';
    let minTop = Math.ceil(0);
    let maxTop = Math.floor(16);
    const randomIndex = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
    newNumber.appendChild(gameboad[randomIndex]);
};
const moveRight = () => {
    if (leftP === 600)
        return;
    leftP += 600;
    tile.style.left = leftP + "px";
    console.log(leftP);
    createNewNumber();
};
const moveLeft = () => {
    if (leftP === 0)
        return;
    leftP -= 600;
    tile.style.left = leftP + "px";
    console.log(leftP);
    createNewNumber();
};
const moveDown = () => {
    if (topP === 0)
        return;
    topP -= 600;
    tile.style.top = topP + "px";
    console.log(topP);
    createNewNumber();
};
const moveUp = () => {
    if (topP === 600)
        return;
    topP += 600;
    tile.style.top = topP + "px";
    console.log(topP);
    createNewNumber();
};
window.addEventListener("keydown", (e) => {
    if (e.keyCode === 39)
        moveRight();
    if (e.keyCode === 37)
        moveLeft();
    if (e.keyCode === 38)
        moveDown();
    if (e.keyCode === 40)
        moveUp();
});
//Stworzyć obiekt, w którym przechowywane byłby wartościu pól wyłączonych z użyktu
