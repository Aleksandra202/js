

let input = document.getElementById('text')
let div1 = document.getElementById('div1')
let newInput = document.getElementById('color')
let button = document.getElementById('button')
let newButton = document.getElementById('colorB')
let h1 = document.getElementById('h1')
let newBut1 = document.getElementById('bot1')
let newBut2 = document.getElementById('bot2')
let newBut3 = document.getElementById('bot3')
let newBut4 = document.getElementById('bot4')
let h_position = 0
let v_position = 0
    step = 20 

button.addEventListener('click', renameHeading)
newButton.addEventListener('click', viewDiv)

function renameHeading() {
    console.log(input.value)
    h1.innerHTML = input.value
}
function viewDiv() {
    // div1.innerHTML = newInput.value
    // div1.innerHTML = input.value
    div1.style.display = "block"
    div1.style.backgroundColor = newInput.value
}

newBut3.addEventListener('click', moveRight)

function moveRight(e){
    e.preventDefault()

    h_position += step

    if (h_position >1135) {
        alert('move left')
    } else {
        console.log(div1.style.left, h_position)
        div1.style.left = h_position  + "px";
    }
}

newBut1.addEventListener('click', moveLeft)

function moveLeft(e){
    e.preventDefault()

    h_position -= step

    if (h_position < 0) {
        alert('move left')
    } else {
        console.log(div1.style.left, h_position)
        div1.style.left = h_position  + "px";
    }
}

newBut2.addEventListener('click', moveTop)
function moveTop(e){
    e.preventDefault()

    v_position -= step

    if (v_position < 0) {
        alert('move down')
    } else {
        console.log(div1.style.left, v_position)
        div1.style.top = v_position  + "px";
    }
}
newBut4.addEventListener('click', moveDown)
function moveDown(e){
    e.preventDefault()

    v_position += step

    if (v_position > 200) {
        alert('move top')
    } else {
        console.log(div1.style.left, v_position)
        div1.style.top = v_position  + "px";
    }
}