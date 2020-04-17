let bailes = ['BALLET','IRISH JIG','RUNNING MAN','SALSA','SINGLE LADIES','SHIMMY','LAP DANCE','CAN CAN','RUSSIAN DANCE','TWERK','EL TIBURON','THRILLER','VOGUE','DISCO','MOONWALK','THE ROBOT']

let h1 = document.querySelector('h1');
let button = document.querySelector('button');



bailes = _.shuffle(bailes);
trueLenght = bailes.length;


const pedirBaile = () => {
    if(bailes.length === 0){
        throw 'No hay más bailes';
    }
    

    const baile =  bailes.pop();
    return baile;
}



 button.addEventListener('click',() => {
     h1.innerText = pedirBaile();
})



// for(let i = 0; i < trueLenght; i++){
    
//       nuevoBaile = h1.innerText = pedirBaile();
     
// }


