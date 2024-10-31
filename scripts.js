const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.colorButton')
let color = 'black';

for(let i = 0; i < 1000; i++){
    const square = document.createElement('div');
    square.setAttribute('id', `square${i}`);
    square.setAttribute('class', `square`);
    square.style.backgroundColor = 'white';
    square.style.width = '2%';
    square.style.height = '5%';
    square.addEventListener("mouseover",()=>{square.style.backgroundColor = color})
    screen.appendChild(square);
};

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
    const squares = document.querySelectorAll('.square')
    squares.forEach((square)=>{square.style.backgroundColor = 'white'})
}