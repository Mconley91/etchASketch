const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.colorButton')
let color = 'black';
let areWePainting = false;

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

const squares = document.querySelectorAll('.square')

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
        }
    })
});

function reset(){
    squares.forEach((square)=>{square.style.backgroundColor = 'white'})
}

function painting(square){
    if(areWePainting){
        square.style.backgroundColor = color;
    }
}
screen.addEventListener('click', ()=>{areWePainting ? areWePainting = false : areWePainting = true})