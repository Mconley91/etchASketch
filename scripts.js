const screen = document.querySelector('#screen');
let color = 'black';
let areWePainting = false;
screen.addEventListener('click', ()=>{
    areWePainting ? areWePainting = false : areWePainting = true;
});
let areWeRainbowing= false;
const testMystery = getMystery; //no idea why this works. If getMystery is called it breaks.


for(let i = 0; i < 20000; i++){
    const square = document.createElement('div');
    square.setAttribute('id', `square${i}`);
    square.setAttribute('class', `square`);
    square.addEventListener('mouseover', ()=>{painting(square)})
    square.style.backgroundColor = 'white';
    square.style.width = '.5%'; //make these adjustable via user input
    square.style.height = '1%'; //make these adjustable via user input
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
    squares.forEach((square)=>{square.addEventListener('mouseover', testMystery)});
    areWeRainbowing = true;
};
function removeRainbow(){
    squares.forEach((square)=>{square.removeEventListener('mouseover', testMystery)});
    areWeRainbowing = false;
}