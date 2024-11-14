const game = document.querySelector('#game');
const screen = document.querySelector('#screen');

let color = 'black';
let areWePainting = false;
let areWeRainbowing= false;
let areWeDarkening = false;
let areWeLightening = false;
let userInput = 64;
let standardSize;
let squareCount;
let squareWidth;
let squareHeight;
let squares;
const buttons = document.querySelectorAll('.colorButton');
makeCanvas();

game.addEventListener('mousedown', ()=>{
    areWePainting  = true;
});
game.addEventListener('mouseup', ()=>{
    areWePainting = false;
});

const rainbowing = getMystery; //If getMystery is called instead of referenced it breaks.

function makeCanvas(){
    standardSize = 100/userInput;
    squareCount = userInput * userInput;
    squareWidth = `${standardSize}%`;
    squareHeight = `${standardSize}%`;
    for(let i = 1; i <= squareCount; i++){
        const square = document.createElement('div');
        square.setAttribute('id', `square${i}`);
        square.setAttribute('class', `square`);
        square.addEventListener('mouseover', ()=>{painting(square)});
        square.style.backgroundColor = 'white';
        square.style.opacity = 1;
        square.style.width = squareWidth; 
        square.style.height = squareHeight; 
        square.style.display = 'flex';
        square.style.justifyContent = 'center';
        square.style.alignItems = 'center';
        screen.appendChild(square);
        squares = document.querySelectorAll('.square');
    };
}; 

buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        areWeRainbowing ? removeRainbow() : null;
        areWeDarkening = false;
        areWeLightening = false;
        switch(event.target.id){
            case 'yellow':
                color = 'yellow';
                break;
            case 'green':
                color = 'green';
                break;
            case 'red':
                color = 'red';
                break;
            case 'blue':
                color = 'blue';
                break;
            case 'black':
                color = 'black';
                break;
            case 'white':
                color = 'white';
                break;
            case 'purple':
                color = 'purple';
                break;
            case 'brown':
                color = 'brown';
                break;
            case 'orange':
                color = 'orange';
                break;
            case 'grey':
                color = 'grey';
                break;
            case 'mystery':
                getMystery();
                break;
            case 'rainbow':
                rainbow();
                break;
            case 'darken':
                areWeDarkening = true;
                break;
            case 'lighten':
                areWeLightening = true;
                break;
        }
    })
});
function reset(){
    squares.forEach((square)=>{
        square.style.backgroundColor = 'white';
        square.style.opacity = 1;
    })
};
function painting(square){
    if(!areWeDarkening && !areWeLightening){
        if(areWePainting){
            square.style.backgroundColor = color;
        }
    }
    else {
        if(areWePainting){
            darkenOrLighten(square);
        }
    }
};
function getMystery(){
    let returnArray = [];
    for (let i = 0; i < 6; i++) {
        returnArray.push(Math.floor(Math.random() * 10));
    }
    color = '#' + returnArray.join("");
};
function rainbow(){
    squares.forEach((square)=>{square.addEventListener('mouseover', rainbowing)});
    areWeRainbowing = true;
};
function removeRainbow(){
    squares.forEach((square)=>{square.removeEventListener('mouseover', rainbowing)});
    areWeRainbowing = false;
};
function adjust(){
    let input = prompt('Enter a number between 1 & 100');
    if(input > 100 || input <= 0){
        alert('invalid entry');
    }
    else{
        deleteCanvas();
        userInput = input;
        makeCanvas();
    }
};
function deleteCanvas(){
    squares.forEach((square)=>{square.remove()})
};

function darkenOrLighten(square){
    let opacityAsPercentage = square.style.opacity * 100;
    let controller = 10;
    if(areWeLightening){
        if(opacityAsPercentage < 100){
            square.style.opacity  = `${opacityAsPercentage + controller}%`;
        }
    }
    else{
        if(opacityAsPercentage > 0){
            square.style.opacity  = `${opacityAsPercentage - controller}%`;
        }
    }
};