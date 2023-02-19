
const main = document.querySelector('main');

function gridCreator(rc=16){
    const cntr = document.createElement('div');
    cntr.setAttribute("id", "container");
    main.append(cntr);


    for(let i=0; i<rc; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        
        for(let j=0; j<rc; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            
           // cell.style.border='1px solid black';
            row.appendChild(cell);
        }
        cntr.appendChild(row);
    }
    const cells = document.querySelectorAll('.cell');
    cells.forEach(block=>{
        block.addEventListener('mouseover', function(){
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const randomColor = `rgb(${red}, ${green}, ${blue})`;
      this.style.backgroundColor = randomColor;
        })
    });
}

gridCreator();

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    const cntr = document.querySelector('#container');
    cntr.remove();

    let gInput = prompt("Keep it below 100");
    
    if(gInput<100)
        gridCreator(gInput);
    else
        alert('I told you to keep it below one hundred');
});
