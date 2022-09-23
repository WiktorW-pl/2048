const tile = document.querySelector('.tile__number');
const emptyTile = document.querySelectorAll('.tile');

let topPosition = 0;
let leftPosition = 0;


//Obiek przechowywujący współrzędne pól wyłączonych z użyktu (nie może tam zostać stworzony kolejny element)
const usedPosition = {
    usedTop: [],
    usedLeft: [],
}


//CreateNewTile- Funkcja ma tworzyć nowy bloczek z liczbą, bloczek ma być tworzony w losowym kwadracie, a współrzędne tego bloczka mają zostać przekazane do obiektu usedPosition, tak, aby nie możliwe było tam już utworzenie kolejnego elementu
const createNewTile = (usedPosition) =>{
    const newTile = document.createElement('div');
    newTile.classList.add('tile__number')
//  emptyTile[randomIndex].appendChild(newTile);

    // let rect = newTile.getBoundingClientRect()
    // console.log("x: "+ rect.left);
    // console.log("y: "+ rect.top);
}

const moveRight = () => {
    if (leftPosition === 600) return;

    leftPosition += 600;
    tile.style.left = leftPosition + "px";
    usedPosition.usedTop = topPosition;
    usedPosition.usedLeft = leftPosition;
    console.log(usedPosition)
    createNewTile(usedPosition);
};

const moveLeft = () => {
    if (leftPosition === 0) return;

    leftPosition -= 600;
    tile.style.left = leftPosition + "px";
    usedPosition.usedTop = topPosition;
    usedPosition.usedLeft = leftPosition;
    console.log(usedPosition)
    // createNewNumber();
};

const moveDown = () => {
    if (topPosition === 0) return;

    topPosition -= 600;
    tile.style.top = topPosition + "px";
    usedPosition.usedTop = topPosition;
    usedPosition.usedLeft = leftPosition;
    console.log(usedPosition)
    // createNewNumber();
};

const moveUp = () => {
    if (topPosition === 600) return;

    topPosition += 600;
    tile.style.top = topPosition + "px";
    usedPosition.usedTop = topPosition;
    usedPosition.usedLeft = leftPosition;
    console.log(usedPosition)
    // createNewNumber();
};


//sterowanie:
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


// Rzeczy do zrobienia: 
// 1. Napisanie mechanizmu, który odczytuje współrzędne pojedyńczego, inicjującego bloczka
// 2. Funkcja losująca współrzędne nowo wygenerowanego bloczka
// 3. Funkcja, który odczytuje współrzędne nowo wygenerowanego bloczka i przekazuje je do obiektu usedPosition
// 4. Przy każdym ruchu gracza bloczki układają się maksymalnie blisko siebie, ale nigdy jeden na drugim (użyć danych z usedPosition)