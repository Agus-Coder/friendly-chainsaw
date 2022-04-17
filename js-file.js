function llenarDiv(){
    for(let i=0 ; i<(16*16); i++){
        const content = document.createElement('div');
        container.appendChild(content);
    }
}

const container = document.querySelector('#container');

llenarDiv()