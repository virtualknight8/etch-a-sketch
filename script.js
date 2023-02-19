
const cntr = document.querySelector('#container');

function gridCreator(rc=16){
    

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
}

gridCreator();


const cell = document.querySelectorAll('.cell');
const rows = document.querySelectorAll('.row');

cell.forEach(block=>{
    block.addEventListener('mouseover', function(){
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  this.style.backgroundColor = randomColor;
    })
});



const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    //
   
   /* cell.forEach(cld=>{
    
        cld.remove();
    });*/
    rows.forEach(row=>{
        row.remove();
    });

    let gInput = prompt();
    gridCreator(gInput);
    
});
