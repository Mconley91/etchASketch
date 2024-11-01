const screen = document.querySelector('#screen');
let color = 'black';
let areWePainting = false;
screen.addEventListener('click', ()=>{
    areWePainting ? areWePainting = false : areWePainting = true;
});


for(let i = 0; i < 20000; i++){
    const square = document.createElement('div');
    square.setAttribute('id', `square${i}`);
    square.setAttribute('class', `square`);
    square.addEventListener('mouseover', ()=>{painting(square)})
    square.style.backgroundColor = 'white';
    square.style.width = '.5%';
    square.style.height = '1%';
    screen.appendChild(square);
};

const squares = document.querySelectorAll('.square');
const buttons = document.querySelectorAll('.colorButton');

buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
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
                // case 'rainbow':
                // rainbow();
                // break;
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
    mystery = Math.floor(Math.random() * 999999) + 1;
    color = '#' + mystery;
}

// function rainbow(){
//     squares.forEach((square)=>{square.addEventListener('mouseover', ()=>{getMystery()})})
// }