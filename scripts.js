const screen = document.querySelector('#screen');
for(let i = 0; i < 256; i++){
    const square = document.createElement('div');
    square.setAttribute('id', `square${i}`);
    square.style.backgroundColor = 'white';
    square.style.width = '50px';
    square.style.height = '50px';
    square.addEventListener("mouseover",()=>{square.style.backgroundColor = 'black'})
    screen.appendChild(square);
}