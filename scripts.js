const screen = document.querySelector('#screen');
let color = 'black';
let areWePainting = false;
let areWeRainbowing= false;
let squareCount = 13000; //13000 was original value
let squareWidth = '.5%'; //'.5%'
let squareHeight = '1%'; //'1%'

screen.addEventListener('click', ()=>{
    areWePainting ? areWePainting = false : areWePainting = true;
});
const rainbowing = getMystery; //no idea why this works. If getMystery is called it breaks.


for(let i = 0; i < squareCount; i++){
    const square = document.createElement('div');
    square.setAttribute('id', `square${i}`);
    square.setAttribute('class', `square`);
    square.addEventListener('mouseover', ()=>{painting(square)});
    square.style.backgroundColor = 'white';
    square.style.width = squareWidth; 
    square.style.height = squareHeight; 
    square.style.flex = '1 1 auto';
    // square.innerText = i; //dev tool
    square.style.border = 'solid 1px lightgrey'; //dev tool
    // square.style.borderRadius = '50%'; //for fun
    square.style.textAlign = 'center;'
    screen.appendChild(square);
};

const squares = document.querySelectorAll('.square');
const buttons = document.querySelectorAll('.colorButton');

buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        areWeRainbowing ? removeRainbow() : null;
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
        }
    })
});

function reset(){
    squares.forEach((square)=>{square.style.backgroundColor = 'white'})
};

function painting(square){
    if(areWePainting){
        square.style.backgroundColor = color;
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