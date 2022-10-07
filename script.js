const gridd = document.querySelector('#gridd');
gridd.style.cssText = 'display: flex; flex-wrap: wrap; border:1px solid black; height:320px; width: 320px;';


for(let i = 256; i > 0; i--){
    function addGrid() {
        
        const cell1 = document.createElement('div');
                cell1.classList.add('cell1');
                cell1.style.cssText = 'box-sizing: border-box; border:1px solid black; height:20px; aspect-ratio:1/1;';
        
        gridd.appendChild(cell1);
    }
    addGrid();
}